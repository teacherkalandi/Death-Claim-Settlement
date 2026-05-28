/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SlideDeck } from './components/SlideDeck';
import { slides } from './data/slides';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center p-4 sm:p-8 md:p-12">
      <SlideDeck slides={slides} />
    </div>
  );
}
