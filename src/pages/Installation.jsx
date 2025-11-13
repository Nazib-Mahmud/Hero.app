import React, { useMemo, useState } from 'react';
import data from '../data/apps.json';
import { getInstalled, uninstall } from '../utils/storage';
import AppCard from '../components/AppCard';
import SortDropdown from '../components/SortDropdown';
import toast from 'react-hot-toast';

export default function Installation() {
  const [sort, setSort] = useState('hl');
  const [version, setVersion] = useState(0);

  const items = useMemo(() => {
    const ids = getInstalled();
    const apps = data.filter(a => ids.includes(a.id));
    return [...apps].sort((a, b) =>
      sort === 'hl' ? b.downloads - a.downloads : a.downloads - b.downloads
    );
  }, [sort, version]);

  const onRemove = id => {
    uninstall(id);
    setVersion(v => v + 1);
    toast.success('App uninstalled');
  };

  if (!items.length) {
    return (
      <div className="container center" style={{ paddingTop: 24 }}>
        <h2>Your Installed Apps</h2>
        <div>No apps yet. Go to Apps and install something!</div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <div className="topbar" style={{ flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h2>Your Installed Apps</h2>
          <div style={{ color: '#475569' }}>{items.length} Apps Found</div>
        </div>

        <SortDropdown value={sort} setValue={setSort} />
      </div>

      <div
        className="grid cols-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16
        }}
      >
        {items.map(app => (
          <div key={app.id} className="card">
            <AppCard app={app} />
            <div className="body">
              <button
                className="button"
                onClick={() => onRemove(app.id)}
                style={{ width: '100%' }}
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
