import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function AIParticles() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Determine colors based on theme for optimal visibility
    const isDark = theme === 'dark';
    // Deep indigo for light mode, bright violet/cyan for dark mode
    const nodeColor = isDark ? 'rgba(129, 140, 248, ' : 'rgba(79, 70, 229, '; 
    const connectionColor = isDark ? 'rgba(99, 102, 241, ' : 'rgba(67, 56, 202, ';
    const packetColor = isDark ? 'rgba(34, 211, 238, ' : 'rgba(14, 165, 233, '; // Cyan for data packets

    const particles = [];
    const numParticles = Math.min(Math.floor(window.innerWidth / 12), 120); // Denser network

    // Global mouse state
    const mouse = {
      x: null,
      y: null,
      radius: 200 // How far the mouse can interact
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.baseRadius = Math.random() * 1.5 + 0.5;
        this.radius = this.baseRadius;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Interactive mouse repel and grow
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            // Nodes get gently pushed away
            this.x -= forceDirectionX * force * 1.5;
            this.y -= forceDirectionY * force * 1.5;
            // Nodes swell when the mouse is near
            this.radius = this.baseRadius + (force * 3);
          } else {
            this.radius = Math.max(this.baseRadius, this.radius - 0.1);
          }
        } else {
          this.radius = Math.max(this.baseRadius, this.radius - 0.1);
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor + (this.radius > this.baseRadius ? '0.9)' : '0.5)');
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    // "Data Packets" - small glowing dots that travel along the network lines
    const packets = [];
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect nodes to mouse
        if (mouse.x != null && mouse.y != null) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            const opacity = 1 - (distance / mouse.radius);
            ctx.strokeStyle = packetColor + (opacity * 0.6) + ')';
            ctx.lineWidth = opacity * 1.5;
            ctx.stroke();
          }
        }

        // Connect nodes to each other
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = 1 - (distance / 160);
            ctx.strokeStyle = connectionColor + (opacity * 0.4) + ')';
            ctx.lineWidth = opacity;
            ctx.stroke();

            // Randomly spawn data packets transferring between connected nodes
            if (Math.random() < 0.002) {
              packets.push({
                startX: particles[i].x,
                startY: particles[i].y,
                endX: particles[j].x,
                endY: particles[j].y,
                progress: 0,
                speed: Math.random() * 0.015 + 0.01
              });
            }
          }
        }
      }

      // Animate and draw data packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;
        
        if (p.progress >= 1) {
          packets.splice(i, 1);
        } else {
          const currentX = p.startX + (p.endX - p.startX) * p.progress;
          const currentY = p.startY + (p.endY - p.startY) * p.progress;
          
          ctx.beginPath();
          ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
          ctx.fillStyle = packetColor + '1)';
          ctx.fill();
          
          // Add a glow effect to packets
          ctx.shadowBlur = 10;
          ctx.shadowColor = packetColor + '1)';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      style={{ opacity: theme === 'dark' ? 0.85 : 0.6 }}
    />
  );
}
