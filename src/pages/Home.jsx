import React from "react";
import data from "../data/apps.json";
import AppCard from "../components/AppCard";

export default function Home() {
  const top = [...data].sort((a, b) => b.downloads - a.downloads).slice(0, 8);

  return (
    <div>
      <section className="hero centered">
        <div className="container">
          <div className="badge">We Build</div>

          <h1>
            Productive <span className="accent">Apps</span>
          </h1>

          <p>
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="flex" style={{ justifyContent: "center", gap: 12 }}>
            <a className="store-btn" href="https://play.google.com" target="_blank">
              <img src="/assets/icon-downloads.png" alt="" />
              Google Play
            </a>

            <a className="store-btn" href="https://www.apple.com/app-store/" target="_blank">
              <img src="/assets/icon-ratings.png" alt="" />
              App Store
            </a>
          </div>

          {/* Phone preview */}
          <div className="phone-wrap">
            <img src="/assets/home.png" className="phone" />

            <div className="float-ic fi1">
              <img src="/assets/demo1.webp" />
            </div>
            <div className="float-ic fi2">
              <img src="/assets/demo2.webp" />
            </div>
            <div className="float-ic fi3">
              <img src="/assets/demo3.webp" />
            </div>
            <div className="float-ic fi4">
              <img src="/assets/demo4.webp" />
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="container">
        <div className="purple-band">
          <h2 className="section-title">Trusted By Millions, Built For You</h2>

          <div className="kpi-row">
            <div className="kpi-card">
              <div className="big">29.6M</div>
              <div>Total Downloads</div>
              <div className="small">21% More Than Last Month</div>
            </div>

            <div className="kpi-card">
              <div className="big">906K</div>
              <div>Total Reviews</div>
              <div className="small">46% More Than Last Month</div>
            </div>

            <div className="kpi-card">
              <div className="big">132+</div>
              <div>Active Apps</div>
              <div className="small">31 More Will Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Apps */}
      <section className="container" style={{ marginTop: 20 }}>
        <div className="topbar" style={{ justifyContent: "center", flexDirection: "column" }}>
          <h2 className="section-title">Trending Apps</h2>
          <div className="section-sub">Explore All Trending Apps developed by us.</div>

          <a className="button" href="/apps" style={{ background: "#7c3aed" }}>
            Show All
          </a>
        </div>

        <div className="grid cols-4">
          {top.map((a) => (
            <AppCard key={a.id} app={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
