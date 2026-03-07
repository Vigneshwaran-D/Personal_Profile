"use client";

import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

export function Counters() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStart(true);
            observer.disconnect();
            break;
          }
        }
      },
      { root: null, threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
      id="section-counter"
      ref={(node) => {
        sectionRef.current = node;
      }}
    >
      <div className="container">
        <div className="row d-md-flex align-items-center">
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number">
                  {start ? <CountUp end={3} duration={2} /> : 0}
                </strong>
                <span>Awards</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number">
                  {start ? <CountUp end={600} duration={2.5} /> : 0}
                </strong>
                <span>Complete Projects</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number">
                  {start ? <CountUp end={120} duration={2.2} /> : 0}
                </strong>
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18">
              <div className="text">
                <strong className="number">
                  {start ? <CountUp end={500} duration={2.4} /> : 0}
                </strong>
                <span>Cups of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

