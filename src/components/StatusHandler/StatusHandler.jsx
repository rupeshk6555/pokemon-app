import React from "react";

const StatusHandler = ({ loading, error }) => {
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  return null;
};

export default StatusHandler;
