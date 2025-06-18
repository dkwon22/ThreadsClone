import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User, Subscription } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { ActivityIndicator, View } from 'react-native';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context   ) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ 
    children, 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Get the initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user);
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    });


    // Listen for auth state changes
    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session) {
            setUser(session.user);
            setIsAuthenticated(true);
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
      });


    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
}, []);

if (isLoading) {
    return (
        <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="0000ff" />
        </View>
    );
}

  return <AuthContext.Provider value={{ user, isAuthenticated }}>{children}</AuthContext.Provider>;
};
