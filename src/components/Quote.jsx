import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Function to fetch a random quote from the API
  const fetchQuote = async () => {
    try {
      setLoading(true);
      setError(null);

      //Try to fetch the quote
      const response = await fetch('https://zenquotes.io/api/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      //Set the quote data
      const data = await response.json();
      setQuote(data[0]);
    } catch (err) {
      //Handle any errors
      setError(err.message);
    } finally {
      //Finally, set loading to false
      setLoading(false);
    }
  };

  //Fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []); //Empty dependency array ensures this runs only once

  //Finally, render the component
  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading Quote...</Text>
      ) : error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : (
        <View>
          <Text style={styles.quoteText}>"{quote.q}"</Text>
          <Text style={styles.authorText}>- {quote.a}</Text>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  quoteText: {
    fontSize: 16,
    marginBottom: 4,
  },
  authorText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 12,
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
  },
});
