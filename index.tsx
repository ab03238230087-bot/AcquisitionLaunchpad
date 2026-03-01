
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #050505;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b2830a;
}
body {
  background-color: #050505;
  cursor: none; /* Hide default cursor for custom one */
  margin: 0;
}
a, button, input, [role="button"] {
  cursor: none; /* Ensure custom cursor is visible everywhere */
}
/* Fallback for touch devices */
@media (hover: none) and (pointer: coarse) {
  body, a, button, input, [role="button"] {
    cursor: auto;
  }
  #custom-cursor {
    display: none;
  }
}
.text-gradient-gold {
  background: linear-gradient(to right, #b2830a, #fceda4, #b2830a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 8s linear infinite;
}
@keyframes shine {
  to {
    background-position: 200% center;
  }
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
