"use client";

import React, { useEffect, useState } from "react";
import { CounterAPI } from "counterapi";
import { useCookies } from "react-cookie";
import styles from "./Milk.module.css";

const COUNTER_NAMESPACE = "tpxelephant";
const COUNTER_NAME = "milk";
const COOKIE_NAME = "mycookie";

const counter = new CounterAPI();

export const Milk = () => {
  const [count, setCount] = useState(null);
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);
  const [wasCounted, setWasCounted] = useState();

  useEffect(() => {
    if (!cookies[COOKIE_NAME]) {
      counter.up(COUNTER_NAMESPACE, COUNTER_NAME).then((res) => {
        setCount(res.Count);
        setCookie(COOKIE_NAME, true);
        setWasCounted(true);
      });
    } else {
      console.log("looks like you have already visited");
      counter.get(COUNTER_NAMESPACE, COUNTER_NAME).then((res) => {
        setCount(res.Count);

        setWasCounted(false);
      });
    }
  }, []);

  return (
    count && (
      <div>
        {wasCounted && <Thanks />}
        <span className={styles.count}>{count}</span>
      </div>
    )
  );
};

const Thanks = () => (
  <div className={styles.added}>
    Thank you! Half a litre of milk will be donated for you.
  </div>
);
