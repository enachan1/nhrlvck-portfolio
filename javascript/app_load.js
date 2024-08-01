const app_load = () => {
    particlesJS.load('particles-js', '/javascript/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
      });
}
export default app_load;
