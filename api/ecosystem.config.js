module.exports = {
    apps : [
    {
      name: 'MidiaDesk',
      script: 'main.js',
      instances: 1,
      autorestart: true,
      exec_mode: 'fork',
      watch: true,
      max_memory_restart: '1G',
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
    },
  ]
  };
