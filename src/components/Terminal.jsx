import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Terminal.module.css';
import { CONNET_INFO, EXPERIENCE_DATA, PROJECTS, SKILLS } from '../constants/info';

const FloatingTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Vivek\'s Portfolio Terminal!' },
    { type: 'output', content: 'Type "help" to see available commands.' },
    { type: 'output', content: '' }
  ]);

  const currentPath = useRef('user@vivekverma.com:~$ ');

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setIsOpen(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);
  
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  const commands = {
    help: {
      execute: () => [
        'Available commands:',
        '  help          - Show this help message',
        '  about         - Display information about Vivek',
        '  skills        - Show technical skills',
        '  experience    - Display work experience',
        '  projects      - List portfolio projects',
        '  contact       - Show contact information',
        '  clear         - Clear terminal screen',
        '  whoami        - Display current user',
        '  pwd           - Print working directory',
        '  ls            - List directory contents',
        '  cat <file>    - Display file contents',
        '  echo <text>   - Echo text to terminal',
        '  date          - Show current date and time',
        '  version       - Show portfolio version',
        '  close         - Close terminal window'
      ]
    },
    about: {
      execute: () => [
        'Name: Vivek Kumar Verma',
        'Role: Software Developer',
        'Location: India',
        'Education: IIT BHU (Mechanical Engineering)',
        'Passion: Solving complex problems and exploring new technologies',
        'Status: Learning and growing every day!✨'
      ]
    },
    skills: {
      execute: () => {
        return SKILLS.map(skill => {
          const umbrella = skill.name;
          const skills = skill.skills.map(subSkill => subSkill.name).join(', ');
          return `${umbrella}: ${skills}`;
        })
      }
    },
    experience: {
      execute: () => {
        return EXPERIENCE_DATA.map(exp => `${exp.TITLE} at ${exp.COMPANY_NAME} (${exp.TIME})`)
      }
    },
    projects: {
      execute: () => {
        return PROJECTS.map(project => {
          return `${project.name}: ${project.description}`;
        })
      }
    },
    contact: {
      execute: () => {
        return Object.entries(CONNET_INFO).map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
      }
    },
    clear: {
      execute: () => {
        setHistory([]);
        return [];
      }
    },
    whoami: {
      execute: () => ['vivek']
    },
    date: {
      execute: () => [new Date().toString()]
    },
    version: {
      execute: () => ['Portfolio Terminal v2.0.0', 'Built with React and love ❤️']
    },
    close: {
      execute: () => {
        handleClose();
        return ['Terminal closed. Click the terminal button to reopen.']
      }
    },
    hi: {
      execute: () => ['Hello there! 👋']
    },
    hello: {
      execute: () => ['Hello there! 👋']
    },
  };

  const executeCommand = (commandName) => {    
    if (commands[commandName]) {
      const result = commands[commandName].execute();
      return result;
    } else {
      return [`${commandName}: command not found. Type "help" for available commands.`];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!command.trim()) return;

    // Add command to history
    const inputHistory = [{ type: 'input', content: `${currentPath.current} ${command}` }];

    const commandName = command.trim().toLowerCase();

    // Execute command and add output
    const output = executeCommand(commandName);
    const outputHistory = output.map(line => ({ type: 'output', content: line }));
    
    setHistory((prev) => [...prev, ...inputHistory, ...outputHistory, { type: 'output', content: '' }]);
    setCommand('');
    
    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 100);
  };
  const handleClose = () => {
    document.getElementById('vivek-terminal-wrapper').classList.add(styles.closeAnimation);
    setIsAnimating(true);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleTerminalClick = (e) => {
      if (containerRef.current && (containerRef.current.contains(e.target) || containerRef.current == e.target)) {
        inputRef.current && inputRef.current.focus();
      }
    };
    if (inputRef.current && isOpen) {
      inputRef.current.focus();
      document.addEventListener('click', handleTerminalClick);
    }
    if(!isOpen) {
      document.removeEventListener('click', handleTerminalClick);
    }

    return () => {
      document.removeEventListener('click', handleTerminalClick);
    };
  }, [isOpen]);

  const handleMouseDown = (e) => {
    dragging.current = true;
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (dragging.current) {
      const newX = e.clientX - dragStart.current.x;
      const newY = e.clientY - dragStart.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <>
      {/* Floating Terminal Button */}
      <button
        className={`${styles.terminalButton} ${isOpen ? styles.active : ''}`}
        onClick={handleToggle}
        title={isOpen ? 'Close Terminal' : 'Open Terminal'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM8 19v-6h8v6H8zm0-8V5h8v6H8z"/>
          <path d="M10 7h4v2h-4V7zm0 4h4v2h-4v-2z"/>
        </svg>
      </button>

      {isOpen && (
        <div
          ref={containerRef}
          id='vivek-terminal-wrapper'
          className={styles.terminalWrapper}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        >
          <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader} onMouseDown={handleMouseDown}>
            <div className={`${styles.terminalButtons} terminal-buttons`}>
              <button 
                className={`${styles.button} ${styles.close}`}
                onClick={handleClose}
                title="Close"
              >⨉</button>
              <button 
                className={`${styles.button} ${styles.minimize}`}
                onClick={handleClose}
                title="Minimize"
              >⎯</button>
              <button 
                className={`${styles.button} ${styles.maximize}`}
                title="Maximize"
              >⤡</button>
            </div>
            <div className={styles.terminalTitle}>Terminal - Portfolio</div>
          </div>
          <div className={styles.terminalBody} ref={terminalRef}>
            {history.map((item, index) => (
              <div key={index} className={styles.terminalLine}>
                {item.type === 'input' ? (
                  <div className={styles.inputLine}>
                    <span className={styles.prompt}>{item.content}</span>
                  </div>
                ) : (
                  <div className={styles.outputLine}>
                    {item.content}
                  </div>
                )}
              </div>
            ))}
            <form onSubmit={handleSubmit} className={styles.inputForm}>
              <span className={styles.prompt}>{currentPath.current}</span>
              <input
                ref={inputRef}
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className={styles.commandInput}
                autoFocus
              />
            </form>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingTerminal;
