'use client';

import { useState, useEffect } from 'react';

interface RegionGreeting {
  local: string;
  english: string;
}

interface UserRegion {
  country: string;
  greeting: RegionGreeting;
  isLoading: boolean;
}

const regionGreetings: Record<string, RegionGreeting> = {
  // Arab regions
  'SA': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Saudi Arabia
  'AE': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // UAE
  'EG': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Egypt
  'JO': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Jordan
  'LB': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Lebanon
  'SY': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Syria
  'IQ': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Iraq
  'KW': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Kuwait
  'QA': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Qatar
  'BH': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Bahrain
  'OM': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Oman
  'YE': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Yemen
  'MA': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Morocco
  'DZ': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Algeria
  'TN': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Tunisia
  'LY': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Libya
  'SD': { local: 'أهلاً وسهلاً', english: 'Welcome' }, // Sudan
  
  // Indonesia
  'ID': { local: 'Selamat datang', english: 'Welcome' },
  
  // China
  'CN': { local: '欢迎', english: 'Welcome' },
  
  // Vietnam
  'VN': { local: 'Chào mừng', english: 'Welcome' },
  
  // Russia
  'RU': { local: 'Добро пожаловать', english: 'Welcome' },
  
  // Japan
  'JP': { local: 'いらっしゃいませ', english: 'Welcome' },
  
  // Korea
  'KR': { local: '환영합니다', english: 'Welcome' },
};

export function useUserRegion(): UserRegion {
  const [userRegion, setUserRegion] = useState<UserRegion>({
    country: '',
    greeting: { local: '', english: 'Welcome' },
    isLoading: true,
  });

  useEffect(() => {
    const detectRegion = async () => {
      try {
        // Try to get user's country using a free IP geolocation service
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          const countryCode = data.country_code.toUpperCase();
          const greeting = regionGreetings[countryCode] || { local: '', english: 'Welcome' };
          
          setUserRegion({
            country: countryCode,
            greeting,
            isLoading: false,
          });
        } else {
          // Fallback to default
          setUserRegion({
            country: 'UNKNOWN',
            greeting: { local: '', english: 'Welcome' },
            isLoading: false,
          });
        }
      } catch (error) {
        console.warn('Failed to detect user region:', error);
        // Fallback to default
        setUserRegion({
          country: 'UNKNOWN',
          greeting: { local: '', english: 'Welcome' },
          isLoading: false,
        });
      }
    };

    detectRegion();
  }, []);

  return userRegion;
}