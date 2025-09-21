import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Terminal.module.css';
import { CONNET_INFO, EXPERIENCE_DATA, PROJECTS, RESUME_URL, SKILLS } from '../constants/info';

const FloatingTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: <span className={styles.welcomeMessage}>Welcome to Vivek's Terminal!</span> },
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
        <span className={styles.availableCommands}>Available commands:</span>,
        '  help          - Show this help message',
        '  about         - Display information about Vivek',
        '  skills        - Show technical skills',
        '  experience    - Display work experience',
        '  projects      - List portfolio projects',
        '  contact       - Show contact information',
        '  clear         - Clear terminal screen',
        '  whoami        - Display current user',
        '  pwd           - Print working directory',
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
        return Object.entries(CONNET_INFO).map(([key, value]) => {
          return <>{key.charAt(0).toUpperCase() + key.slice(1)}: {!value.includes('http') ? value : <a className={styles.terminalURL} href={value} target='_new'>{value}</a>}</>
        });
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
    resume: {
      execute: () => [<a className={styles.terminalURL} href={RESUME_URL} target='_new'>Resume(PDF)</a>]
    }
  };

  const executeCommand = (commandName) => {
    if (commands[commandName]) {
      const result = commands[commandName].execute();
      return result;
    } else {
      return [<span className={styles.commandNotFound}>{commandName}: command not found. Type "help" for available commands.</span>];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!command.trim()) return;

    const commandName = command.trim().toLowerCase();

    // Execute command and add output
    const output = executeCommand(commandName);

    const inputHistory = commandName === 'clear' ? [] : [{ type: 'input', content: `${currentPath.current} ${command}` }];
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
    if (!isOpen) {
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
        <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="System / Terminal"> <path id="Vector" d="M17 15H12M7 10L10 12.5L7 15M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8031C21 16.921 21 17.48 20.7822 17.9074C20.5905 18.2837 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2837 3.21799 17.9074C3 17.4796 3 16.9203 3 15.8002Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
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
