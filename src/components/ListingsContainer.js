import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Header from "./Header";

function ListingsContainer() {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => {
        setListings(data);
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
      });
  }, []);

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter(
      (listing) => listing.id !== deletedListing.id
    );
    setListings(updatedListings);
  }

  function handleSearch(query) {
    setSearchQuery(query);
  }

  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <Header onSearch={handleSearch} />
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onDeleteListing={handleDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;