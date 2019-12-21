import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "semantic-ui-react";
import { fetchCity, suggestCity, resetSuggestions } from "../actions";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(state => state.suggestions);

  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const onFormSubmit = (e, { result }) => {
    e.preventDefault();
    dispatch(fetchCity(result.title));
    dispatch(resetSuggestions());
    setTerm("");
    setResults([]);
  };

  const onChange = value => {
    setTerm(value);
    if (value.length >= 3) {
      dispatch(suggestCity(value));
    }
  };

  useEffect(() => {
    if (suggestions.searchHits && suggestions.searchHits.length > 0){
      let searchSuggestions = [];
      suggestions.searchHits.forEach(term => searchSuggestions.push({title: term.label}));
      setResults(searchSuggestions);
    }
  }, [suggestions])

  return (
    <Search
      minCharacters={3}
      onResultSelect={onFormSubmit}
      onSearchChange={e => onChange(e.target.value)}
      results={results}
      value={term}
    />
  );
};

export default SearchBar;
