// src/components/VersionDisplay.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const VersionDisplay = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (window?.appInfo?.getVersion) {
        const v = await window.appInfo.getVersion();
        if (!cancelled) setVersion(v);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <Box sx={{ position: 'fixed', bottom: 8, right: 16, opacity: 0.7, zIndex: 1300, }}>
      <Typography variant="caption" color="text.secondary">
        Version {version || '—'}
      </Typography>
    </Box>
  );
};

export default VersionDisplay;
