import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/apps.json';
import { isInstalled, install } from '../utils/storage';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import toast from 'react-hot-toast';
import Breadcrumb from '../components/Breadcrumb';

export default function AppDetails() {
  const { id } = useParams();
  const app = useMemo(() => data.find(a => String(a.id) === id), [id]);
  const [installed, setInstalled] = useState(app ? isInstalled(app.id) : false);

  if (!app) {
    return (
      <div className="container center" style={{ paddingTop: 24 }}>
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Apps', to: '/apps' }, { label: 'App Not Found' }]} />
        <img src="/assets/error-app.png" alt="not found" style={{ maxWidth: 380, width: '100%' }} />
        <h2>Oops!! App Not Found</h2>
        <a href="/apps" className="button">Go Back</a>
      </div>
    );
  }

  const onInstall = () => {
    install(app.id);
    setInstalled(true);
    toast.success('App installed successfully');
  };

  return (
    <div className="container" style={{ paddingTop: 24 }}>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Apps', to: '/apps' }, { label: 'App Details' }]} />

      <div className="card" style={{ padding: 20 }}>
        <div className="details-grid">
          <img src={app.image} className="app-icon" alt={app.title} />

          <div>
            <h2 style={{ margin: '6px 0' }}>{app.title}</h2>
            <div style={{ color: '#64748b' }}>
              Developed by <strong>{app.companyName}</strong>
            </div>

            <div
              className="kpis"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
                gap: 12,
                marginTop: 10
              }}
            >
              <div className="badge" style={{ display: 'block', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#64748b' }}>Downloads</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>
                  {Intl.NumberFormat().format(app.downloads)}
                </div>
              </div>

              <div className="badge" style={{ display: 'block', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#64748b' }}>Avg Ratings</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>{app.ratingAvg}</div>
              </div>

              <div className="badge" style={{ display: 'block', textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#64748b' }}>Total Reviews</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>
                  {Intl.NumberFormat().format(app.reviews)}
                </div>
              </div>
            </div>
          </div>

          <button
            className="button install"
            onClick={onInstall}
            disabled={installed}
            style={{ width: '100%', maxWidth: 220, justifySelf: 'center' }}
          >
            {installed ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>

        <div style={{ marginTop: 24 }}>
          <h3>Ratings</h3>
          <div className="chart" style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={app.ratings}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <h3>Description</h3>
          <p>{app.description}</p>
        </div>
      </div>
    </div>
  );
}
