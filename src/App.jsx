import HomeSummaryCard from './components/HomeSummaryCard';
import EarlyWarningAlertCard from './components/EarlyWarningAlertCard';
import MapView from './components/MapView';
import ExplainableAIPanel from './components/ExplainableAIPanel';
import WhatToDoNow from './components/WhatToDoNow';
import RealTimeSensorStatus from './components/RealTimeSensorStatus';

function App() {
  return (
    <div className="p-4 space-y-4">
      <HomeSummaryCard />
      <EarlyWarningAlertCard />
      <MapView />
      <ExplainableAIPanel />
      <WhatToDoNow />
      <RealTimeSensorStatus />
    </div>
  );
}

export default App;