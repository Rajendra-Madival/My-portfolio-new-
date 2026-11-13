/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BackgroundVideo } from './components/BackgroundVideo';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PortfolioSections } from './components/PortfolioSections';

export function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundVideo />
      <Navbar />
      <Hero />
      <PortfolioSections />
    </div>
  );
}

export default App;
