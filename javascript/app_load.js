const app_load = () => {
  const basePath = window.location.pathname.startsWith('/nhrlvck-portfolio') ? '/nhrlvck-portfolio' : '';

    particlesJS.load('particles-js', `${basePath}/particlesjs-config.json`, function() {
        console.log('callback - particles.js config loaded');
      });
}
export default app_load;
