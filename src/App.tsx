import { FC, useEffect, useState, useCallback, useMemo } from 'react';
import api from './Api/Api';
import './styles/reset.css';
import './styles/main.css';
import Ballot from './Components/Ballot/Ballot';
import Title from './Components/general/Title/Title';
import { SelectionContext } from './contexts/selectionContext';
import styles from './styles/App.module.css';
import { CategorizedBallotData } from './types/ballotData';
import { categorizeBallotData } from './util/categorizeBallot';

const App: FC = () => {
  const [ballot, setBallot] = useState<CategorizedBallotData[] | []>([]);
  const [userSelection, setUserSelection] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    let shouldUpdate = true;

    (async () => {
      await api.getBallotData().then((data) => {
        if (data && shouldUpdate) {
          const ballotData = categorizeBallotData(data);
          setBallot(ballotData);
        }
      });

      return () => {
        shouldUpdate = false;
      };
    })();
  }, []);

  const chooseSelection = useCallback(
    (category: string, selection: string) => {
      setUserSelection({ ...userSelection, [category]: selection });
    },
    [userSelection, setUserSelection]
  );

  const selectionContextValue = useMemo(() => {
    return { chooseSelection, userSelection };
  }, [chooseSelection, userSelection]);

  return (
    <div className={styles.app}>
      <Title className="app" headingLevel={1} text="Awards 2022" />
      <SelectionContext.Provider value={selectionContextValue}>
        <Ballot ballot={ballot} />
      </SelectionContext.Provider>
    </div>
  );
};

export default App;
