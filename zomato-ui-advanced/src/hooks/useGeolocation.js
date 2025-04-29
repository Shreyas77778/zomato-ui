import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const handleSuccess = (position) => {
      setIsLoading(false);
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const handleError = (error) => {
      setIsLoading(false);
      setError(error.message);
    };

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error, isLoading };
};