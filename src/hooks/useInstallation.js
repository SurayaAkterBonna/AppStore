import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const LOCAL_STORAGE_KEY = 'installedApps';

export const useInstallation = () => {
  const [installedApps, setInstalledApps] = useState(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(installedApps));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [installedApps]);

  const isInstalled = (appId) => {
    return installedApps.some((app) => app.id === appId);
  };

  const installApp = (app) => {
    if (!isInstalled(app.id)) {
      setInstalledApps((prev) => [...prev, app]);
      toast.success(`${app.title} installed successfully!`, {
        position: 'top-right',
      });
    } else {
      toast.info(`${app.title} is already installed.`, {
        position: 'top-right',
      });
    }
  };

  const uninstallApp = (appId, appTitle) => {
    setInstalledApps((prev) => prev.filter((app) => app.id !== appId));
    toast.error(`${appTitle} uninstalled.`, {
      position: 'top-right',
    });
  };

  return { installedApps, isInstalled, installApp, uninstallApp };
};