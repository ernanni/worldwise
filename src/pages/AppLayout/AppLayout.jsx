import styles from './AppLayout.module.css';
import { Map, Sidebar } from '../../components';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
