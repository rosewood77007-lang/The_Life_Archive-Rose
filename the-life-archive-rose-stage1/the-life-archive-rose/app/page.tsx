'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Activity, Archive, ArrowDownRight, ArrowRight, BookHeart, BookOpen,
  CalendarDays, Check, ChevronDown, ChevronLeft, ChevronRight, CircleHelp,
  Clock3, Command, Compass, Feather, FileText, Folder, GraduationCap,
  Heart, House, LayoutDashboard, Library, ListTodo, Menu, Moon, MoreHorizontal,
  NotebookPen, Plus, Search, Settings2, Shield, Sparkles, Sun, Target,
  Wallet, WandSparkles, X
} from 'lucide-react';

type Department = { name: string; icon: typeof Activity; color: string; description: string };
const departments: Department[] = [
  { name: 'Physical Health & Care', icon: Activity, color: 'olive', description: 'Health, movement, nutrition and personal care.' },
  { name: 'Mind & Development', icon: Heart, color: 'rose', description: 'Emotional wellbeing, confidence and growth.' },
  { name: 'Daily Life & Routines', icon: Clock3, color: 'brass', description: 'Habits, schedules and everyday responsibilities.' },
  { name: 'Home & Environment', icon: House, color: 'sage', description: 'Your spaces, belongings and surroundings.' },
  { name: 'Education & Career', icon: GraduationCap, color: 'blue', description: 'Learning, research and professional direction.' },
  { name: 'Finance & Independence', icon: Wallet, color: 'green', description: 'Money, earning, saving and independence.' },
  { name: 'Relationships & Social', icon: BookHeart, color: 'mauve', description: 'Communication, boundaries and connection.' },
  { name: 'Practical Life Skills', icon: Compass, color: 'slate', description: 'Decisions, problem-solving and daily skills.' },
];
const navItems = [
  { label: 'Command Center', icon: LayoutDashboard },
  { label: 'My Tasks', icon: ListTodo },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Notes & Pages', icon: FileText },
  { label: 'The Library', icon: Library },
];

export default function HomePage() {
  const [active, setActive] = useState('Command Center');
  const [selectedDepartment, setSelectedDepartment] = useState('Physical Health & Care');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);
  const [captureOpen, setCaptureOpen] = useState(false);
  const [capture, setCapture] = useState('');
  const [captures, setCaptures] = useState<string[]>([]);
  const [dark, setDark] = useState(true);
  const [toast, setToast] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (window.matchMedia('(max-width: 780px)').matches) setSidebarOpen(false);
  }, []);

  const currentDepartment = departments.find(d => d.name === selectedDepartment)!;
  const today = new Date();
  const dateLong = new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }).format(today).toUpperCase();
  const dateMonth = new Intl.DateTimeFormat('en', { month: 'long' }).format(today).toUpperCase();
  const dateDay = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(today);
  const dateWeekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(today).toUpperCase();
  const dateYear = today.getFullYear();
  const filtered = useMemo(() => [...navItems.map(n => n.label), ...departments.map(d => d.name), 'Classic Diary', 'Modern Journal', 'File Vault', 'Settings'].filter(v => v.toLowerCase().includes(query.toLowerCase())), [query]);
  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2400); };

  function submitCapture() {
    if (!capture.trim()) return;
    setCaptures(prev => [capture.trim(), ...prev]);
    setCapture(''); setCaptureOpen(false); notify('Added to your capture inbox.');
  }

  return (
    <main className={dark ? 'app-shell theme-dark' : 'app-shell theme-light'}>
      <aside className={`sidebar ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
        <div className="brand-lockup">
          <div className="brand-seal"><Feather size={19} strokeWidth={1.5} /></div>
          {sidebarOpen && <div className="brand-copy"><span className="brand-name">THE LIFE ARCHIVE</span><span className="brand-owner">— ROSE —</span></div>}
          <button className="icon-button sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar"><Menu size={17}/></button>
        </div>
        <div className="workspace-label">{sidebarOpen ? 'YOUR WORKSPACE' : '—'}</div>
        <nav className="primary-nav" aria-label="Main navigation">
          {navItems.map(item => <button key={item.label} className={`nav-item ${active === item.label ? 'active' : ''}`} onClick={() => {setActive(item.label); if(item.label !== 'Command Center') notify(`${item.label} workspace is planned for a later build stage.`);}} title={item.label}><item.icon size={17}/>{sidebarOpen && <><span>{item.label}</span>{item.label === 'My Tasks' && <span className="nav-count">—</span>}</>}</button>)}
        </nav>
        <div className="side-divider" />
        <div className="section-heading">{sidebarOpen && <span>DEPARTMENTS</span>}<button className="tiny-icon" onClick={() => notify('Department management arrives in Stage 2.')} aria-label="Add department"><Plus size={15}/></button></div>
        <nav className="department-nav" aria-label="Departments">
          {departments.map(dept => <button key={dept.name} className={`nav-item department-item ${selectedDepartment === dept.name && active === 'Department' ? 'active' : ''}`} onClick={() => {setSelectedDepartment(dept.name);setActive('Department');}} title={dept.name}><span className={`dept-dot ${dept.color}`} /><span className="department-name">{sidebarOpen && dept.name}</span>{sidebarOpen && <MoreHorizontal size={14} className="nav-more"/>}</button>)}
        </nav>
        <div className="sidebar-spacer" />
        <div className="side-divider" />
        <button className="nav-item" onClick={() => notify('Settings will be available as the account system is built.')}><Settings2 size={17}/>{sidebarOpen && <span>Settings</span>}</button>
        <div className="profile-row"><div className="avatar">R</div>{sidebarOpen && <div className="profile-copy"><strong>Rose</strong><span>Personal workspace</span></div>}{sidebarOpen && <MoreHorizontal size={17} className="muted-icon"/>}</div>
      </aside>

      <section className="main-column">
        <header className="topbar">
          <div className="breadcrumbs"><span>THE ARCHIVE</span><ChevronRight size={13}/><strong>{active === 'Department' ? selectedDepartment : active}</strong></div>
          <div className="top-actions"><button className="search-trigger" onClick={() => setSearchOpen(true)}><Search size={15}/><span>Search anything...</span><kbd>⌘ K</kbd></button><button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button><button className="capture-button" onClick={() => setCaptureOpen(true)}><Plus size={16}/><span>Quick capture</span></button></div>
        </header>

        <div className="content-wrap">
          {active === 'Department' ? <>
            <div className="page-eyebrow"><span className={`dept-dot ${currentDepartment.color}`}/> DEPARTMENT / PERSONAL WORKSPACE</div>
            <div className="welcome-row"><div><h1>{selectedDepartment}</h1><p className="welcome-subtitle">{currentDepartment.description}</p></div><button className="outline-button" onClick={() => notify('Department customization is planned for Stage 2.')}><Settings2 size={15}/> Customize</button></div>
            <div className="department-intro"><div className="intro-mark"><currentDepartment.icon size={25}/></div><div><span className="eyebrow">A SPACE OF YOUR OWN</span><p>This department will become a dedicated workspace, connected to your notes, tasks, files, research and personal records.</p></div></div>
            <div className="section-title-row"><div><span className="eyebrow">WORKSPACE CONTENTS</span><h2>Everything in its place</h2></div><button className="text-button" onClick={() => setCaptureOpen(true)}>Add something <Plus size={14}/></button></div>
            <div className="empty-state"><div className="empty-icon"><Folder size={23}/></div><h3>Your {selectedDepartment.toLowerCase()} archive begins here.</h3><p>Create pages, organize resources and collect the things you want to remember. The organizational engine is the next development stage.</p><button className="gold-button" onClick={() => setCaptureOpen(true)}><Plus size={15}/> Capture an idea</button></div>
          </> : <>
            <div className="date-line"><span className="date-rule"/> {dateLong} <span className="date-rule"/></div>
            <div className="hero-heading"><div><div className="page-eyebrow">YOUR PERSONAL OPERATING SPACE</div><h1>A life, <em>in the making.</em></h1><p className="welcome-subtitle">A little more order. A little more intention. One day at a time.</p></div><div className="hero-seal"><span>VOL.</span><strong>I</strong><i>MMXXVI</i></div></div>
            <div className="quote-strip"><span className="quote-mark">“</span><p>Great things are done by a series of small things brought together.</p><span className="quote-author">— VINCENT VAN GOGH</span></div>
            <div className="section-title-row priorities-heading"><div><span className="eyebrow">THE PRESENT MOMENT</span><h2>Your command center</h2></div><span className="quiet-label">A CLEAR VIEW OF TODAY</span></div>
            <div className="dashboard-grid">
              <section className="panel today-panel"><div className="panel-heading"><div><span className="eyebrow">01 / DAILY OVERVIEW</span><h3>Today's page</h3></div><span className="panel-icon"><NotebookPen size={17}/></span></div><div className="today-date"><strong>{dateDay}</strong><div><span>{dateMonth}</span><small>{dateWeekday} · {dateYear}</small></div></div><div className="soft-divider"/><div className="empty-inline"><CalendarDays size={16}/><span>Your day is still unwritten. Add a task or make a plan.</span></div><button className="panel-link" onClick={() => notify('Daily planning will be part of the task and calendar modules.')}>Plan your day <ArrowRight size={14}/></button></section>
              <section className="panel focus-panel"><div className="panel-heading"><div><span className="eyebrow">02 / INTENTION</span><h3>A gentle focus</h3></div><span className="panel-icon"><Target size={17}/></span></div><div className="focus-illustration"><div className="focus-orbit orbit-one"/><div className="focus-orbit orbit-two"/><div className="focus-center"><Sparkles size={21}/></div></div><p className="focus-note">You don't need to arrange the whole house today. Begin with one room.</p><button className="panel-link" onClick={() => setCaptureOpen(true)}>Write an intention <ArrowRight size={14}/></button></section>
              <section className="panel habits-panel"><div className="panel-heading"><div><span className="eyebrow">03 / SMALL PROMISES</span><h3>Daily practices</h3></div><span className="panel-icon"><Check size={17}/></span></div><div className="empty-practices"><span className="practice-line"/><span className="practice-line short"/><span className="practice-line"/><p>Your habits will appear here once you create them.</p></div><button className="panel-link" onClick={() => notify('Habit tracking is planned for the organizational engine.')}>Explore habits <ArrowRight size={14}/></button></section>
              <section className="panel upcoming-panel"><div className="panel-heading"><div><span className="eyebrow">04 / WHAT'S AHEAD</span><h3>Upcoming</h3></div><span className="panel-icon"><Clock3 size={17}/></span></div><div className="empty-upcoming"><CalendarDays size={19}/><span>No events on the calendar yet.</span></div><button className="panel-link" onClick={() => notify('Calendar is planned for Stage 2.')}>Open calendar <ArrowRight size={14}/></button></section>
            </div>
            <div className="lower-grid"><section className="panel departments-panel"><div className="panel-heading"><div><span className="eyebrow">YOUR LIFE, IN CHAPTERS</span><h3>Explore your departments</h3></div><span className="quiet-label">08 SPACES</span></div><div className="department-list">{departments.map((d,i)=><button key={d.name} className="department-card" onClick={()=>{setSelectedDepartment(d.name);setActive('Department')}}><span className={`department-symbol ${d.color}`}><d.icon size={16}/></span><span className="department-card-copy"><strong>{d.name}</strong><small>{d.description}</small></span><ArrowDownRight size={15} className="department-arrow"/><span className="department-index">0{i+1}</span></button>)}</div></section>
              <section className="panel capture-panel"><div className="panel-heading"><div><span className="eyebrow">A PLACE TO BEGIN</span><h3>Quick capture</h3></div><span className="panel-icon"><Feather size={17}/></span></div><p className="capture-description">A thought, a task, a link to revisit. Put it somewhere safe before it slips away.</p><button className="capture-drop" onClick={() => setCaptureOpen(true)}><span className="capture-plus"><Plus size={18}/></span><span><strong>Leave a note for later</strong><small>Capture without sorting it yet</small></span><ArrowRight size={15}/></button>{captures.length > 0 && <div className="capture-recent"><span className="eyebrow">RECENT CAPTURES · THIS SESSION</span>{captures.slice(0,3).map((c,i)=><p key={i}><span/> {c}</p>)}</div>}<div className="archive-note"><BookOpen size={17}/><span>Your archive is private by design. Account-backed storage will be connected before personal data is persisted.</span></div></section></div>
          </>}
          <footer className="page-footer"><span>THE LIFE ARCHIVE — ROSE</span><span>MADE WITH INTENTION <span className="footer-star">✳</span></span><span>FOUNDATION PREVIEW · 0.1</span></footer>
        </div>
      </section>

      {searchOpen && <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setSearchOpen(false)}}><section className="search-modal"><div className="modal-search-row"><Search size={18}/><input autoFocus placeholder="Search your archive..." value={query} onChange={e=>setQuery(e.target.value)}/><button className="key-close" onClick={()=>setSearchOpen(false)}>ESC</button></div><div className="search-results"><span className="eyebrow">{query ? 'MATCHING DESTINATIONS' : 'QUICK NAVIGATION'}</span>{filtered.length ? filtered.slice(0,9).map(item=><button key={item} onClick={()=>{const d=departments.find(x=>x.name===item);if(d){setSelectedDepartment(d.name);setActive('Department')}else setActive(item);setSearchOpen(false);}}><Search size={14}/>{item}<ArrowRight size={13}/></button>) : <p className="no-results">No matching destination. Search across saved content will arrive with the search engine.</p>}</div><div className="search-foot"><span>SEARCH PREVIEW</span><span>ESC TO CLOSE</span></div></section></div>}
      {captureOpen && <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setCaptureOpen(false)}}><section className="capture-modal"><div className="modal-heading"><div><span className="eyebrow">QUICK CAPTURE / INBOX</span><h2>Catch the thought.</h2></div><button className="icon-button" onClick={()=>setCaptureOpen(false)} aria-label="Close"><X size={18}/></button></div><p className="modal-description">Write it down now. You can organize it into a department later.</p><textarea autoFocus value={capture} onChange={e=>setCapture(e.target.value)} placeholder="A thought, a task, a little reminder..."/><div className="modal-actions"><span>SESSION ONLY · NOT YET SYNCED</span><button className="gold-button" onClick={submitCapture} disabled={!capture.trim()}>Save capture <ArrowRight size={15}/></button></div></section></div>}
      {toast && <div className="toast"><Check size={15}/>{toast}</div>}
      <button className="mobile-menu" onClick={()=>setSidebarOpen(!sidebarOpen)} aria-label="Toggle navigation"><Menu size={19}/></button>
    </main>
  );
}
