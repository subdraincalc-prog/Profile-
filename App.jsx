import React from 'react';
import { Helmet } from 'react-helmet';
import SimpleProfileDashboard from '@/components/SimpleProfileDashboard';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Simple User Profile Dashboard</title>
        <meta name="description" content="A simple user profile dashboard with form submission, localStorage persistence, and data display." />
      </Helmet>
      <div className='min-h-screen bg-slate-50'>
        <SimpleProfileDashboard />
        <Toaster />
      </div>
    </>
  );
}

export default App;
