// /server/api/nearby-attractions.js

import { defineEventHandler } from 'h3';
import { useRuntimeConfig } from '#imports';
import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { latitude, longitude } = query;
  const config = useRuntimeConfig();
  const google_api_key = config.public.GOOGLE_MAPS_API_KEY;

  const radius = 8047; // 5 miles in meters
  const url = 'https://places.googleapis.com/v1/places:searchNearby';

  const payload = {
    includedTypes: ['hospital', 'shopping_mall'],
    maxResultCount: 20,
    locationRestriction: {
      circle: {
        center: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        },
        radius: radius,
      },
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': google_api_key,
        'X-Goog-FieldMask': 'places.displayName,places.types,places.location,places.rating',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('API Error Response:', data);
      throw new Error(data.error.message || 'API request failed');
    }

    // Map the data to match your client-side expectations
    const results = data.places.map((place) => ({
      name: place.displayName,
      types: place.types,
      geometry: {
        location: {
          lat: place.location.latitude,
          lng: place.location.longitude,
        },
      },
      rating: place.rating,
    }));

    return { results };
  } catch (error) {
    console.error('Error fetching nearby places:', error);

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch nearby places',
    });
  }
});
