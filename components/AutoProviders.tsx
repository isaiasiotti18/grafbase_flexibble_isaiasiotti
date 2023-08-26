"use client";

import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react'
import Button from './Button';

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null
}

type Providers = Record<string, Provider>;

const AutoProviders = () => {

  const [providers, setproviders] = useState<Providers | null>(null)

  useEffect(() => {
    const fetchProviders =async () => {
      const res = await getProviders();

      console.log(res);

      setproviders(res);
    }

    fetchProviders();
  }, []);

  if(providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <Button 
            key={i} 
            title='Sign In'
            handleClick={() => signIn(provider.id)}
          />
        ))}
      </div>
    )
  }
}

export default AutoProviders