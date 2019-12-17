import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity, suggestCity } from "../actions";
import "./SearchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const suggestions = useSelector(state => state.suggestions);
  const [term, setTerm] = useState("");
  const input = useRef(null);

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(fetchCity(term));
    setTerm("");
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
      // input.current.search({
      //   source: searchSuggestions
      // });
      console.log(input.current);
    }
  }, [suggestions])

  return (
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="field">
        <div className="ui search" ref={input}>
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search for a city..."
              autoFocus
              value={term}
              onChange={e => onChange(e.target.value) }
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
