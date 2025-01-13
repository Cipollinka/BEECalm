import AsyncStorage from '@react-native-async-storage/async-storage';

export const createPersistStoreConfig = (storeName: string) => ({
  storage: {
    getItem: async (key: string) => {
      const storedValue = await AsyncStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    },
    setItem: async (key: string, value: any) => {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: async (key: string) => {
      await AsyncStorage.removeItem(key);
    },
  },
  name: storeName,
});
