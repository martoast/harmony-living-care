// stores/properties.js
import { defineStore } from 'pinia';

export const usePropertiesStore = defineStore('properties', {
  state: () => ({
    properties: [],
    property: {},
    total: 0,
  }),

  actions: {
    async get(page = 1, pageSize = 10, sold = null, assistedLiving = null, address = null) {
      console.log("Attempting to get properties");
      let url = `https://seashell-app-lestx.ondigitalocean.app/properties/?page=${page}&pageSize=${pageSize}`;
      
      if (sold !== null) {
        url += `&sold=${sold}`;
      }
      
      if (assistedLiving !== null) {
        url += `&assistedLiving=${assistedLiving}`;
      }

      if (address !== null) {
        url += `&address=${address}`;
      }
      
      try {
        const response = await $fetch(url);
        this.properties = response.properties;
        this.total = response.total;
        console.log("Properties fetched successfully:", this.properties.length);
      } catch (error) {
        console.error("Error fetching properties:", error);
        throw error;
      }
    },

    async find(ID) {
      const url = `https://seashell-app-lestx.ondigitalocean.app/properties/${ID}`;
      this.property = await $fetch(url);
    },

    // In your DataStore.js
    async getAssistedLiving(page = 1, pageSize = 10) {
      console.log("Fetching assisted living properties");
      let url = `https://seashell-app-lestx.ondigitalocean.app/properties/?page=${page}&pageSize=${pageSize}&assistedLiving=true`;
      
      return $fetch(url).then(response => {
        this.properties = response.properties;
        this.total = response.total;
        return response;
      }).catch(error => {
        console.error("Error fetching assisted living properties:", error);
        throw error;
      });
    },
  },

  getters: {
    getProperties: (state) => state.properties,
    getProperty: (state) => state.property
  }
});
