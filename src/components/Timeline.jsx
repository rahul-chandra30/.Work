import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-regular-svg-icons';

// Explicitly import icons from the filtered list
const iconMap = {
  'fa-bell': Icons.faBell,
  'fa-bookmark': Icons.faBookmark,
  'fa-calendar': Icons.faCalendar,
  'fa-calendar-alt': Icons.faCalendarAlt,
  'fa-calendar-check': Icons.faCalendarCheck,
  'fa-calendar-minus': Icons.faCalendarMinus,
  'fa-calendar-plus': Icons.faCalendarPlus,
  'fa-check-circle': Icons.faCheckCircle,
  'fa-check-square': Icons.faCheckSquare,
  'fa-circle': Icons.faCircle,
  'fa-clock': Icons.faClock,
  'fa-comment': Icons.faComment,
  'fa-comments': Icons.faComments,
  'fa-copy': Icons.faCopy,
  'fa-edit': Icons.faEdit,
  'fa-envelope': Icons.faEnvelope,
  'fa-envelope-open': Icons.faEnvelopeOpen,
  'fa-file': Icons.faFile,
  'fa-file-alt': Icons.faFileAlt,
  'fa-flag': Icons.faFlag,
  'fa-folder': Icons.faFolder,
  'fa-folder-open': Icons.faFolderOpen,
  'fa-frown': Icons.faFrown,
  'fa-heart': Icons.faHeart,
  'fa-hourglass': Icons.faHourglass,
  'fa-image': Icons.faImage,
  'fa-keyboard': Icons.faKeyboard,
  'fa-lightbulb-o': Icons.faLightbulbO,
  'fa-list-alt': Icons.faListAlt,
  'fa-map': Icons.faMap,
  'fa-meh': Icons.faMeh,
  'fa-minus-square': Icons.faMinusSquare,
  'fa-money-bill-alt': Icons.faMoneyBillAlt,
  'fa-moon': Icons.faMoon,
  'fa-paper-plane': Icons.faPaperPlane,
  'fa-play-circle': Icons.faPlayCircle,
  'fa-plus-square': Icons.faPlusSquare,
  'fa-question-circle': Icons.faQuestionCircle,
  'fa-save': Icons.faSave,
  'fa-share-square': Icons.faShareSquare,
  'fa-smile': Icons.faSmile,
  'fa-square': Icons.faSquare,
  'fa-star': Icons.faStar,
  'fa-sun': Icons.faSun,
  'fa-thumbs-down': Icons.faThumbsDown,
  'fa-thumbs-up': Icons.faThumbsUp,
  'fa-times-circle': Icons.faTimesCircle,
  'fa-trash-alt': Icons.faTrashAlt,
  'fa-user': Icons.faUser,
  'fa-user-circle': Icons.faUserCircle,
  'fa-window-close': Icons.faWindowClose,
  'fa-window-maximize': Icons.faWindowMaximize,
  'fa-window-minimize': Icons.faWindowMinimize,
  'fa-window-restore': Icons.faWindowRestore,
  'fa-address-book': Icons.faAddressBook,
  'fa-address-card': Icons.faAddressCard,
  'fa-building': Icons.faBuilding,
  'fa-chart-bar': Icons.faChartBar,
  'fa-chart-pie': Icons.faChartPie,
  'fa-clipboard': Icons.faClipboard,
  'fa-closed-captioning': Icons.faClosedCaptioning,
  'fa-compass': Icons.faCompass,
  'fa-credit-card': Icons.faCreditCard,
  'fa-dot-circle': Icons.faDotCircle,
  'fa-file-archive-o': Icons.faFileArchiveO,
  'fa-file-audio-o': Icons.faFileAudioO,
  'fa-file-excel-o': Icons.faFileExcelO,
  'fa-file-image-o': Icons.faFileImageO,
  'fa-file-pdf-o': Icons.faFilePdfO,
  'fa-file-powerpoint-o': Icons.faFilePowerpointO,
  'fa-file-video-o': Icons.faFileVideoO,
  'fa-file-word-o': Icons.faFileWordO,
  'fa-handshake': Icons.faHandshake,
  'fa-id-badge': Icons.faIdBadge,
  'fa-id-card': Icons.faIdCard,
};

const colorOptions = [
  // Blues
  'bg-blue-600', 'bg-blue-700', 'bg-sky-600', 'bg-cyan-600',
  // Purples
  'bg-purple-600', 'bg-violet-600', 'bg-indigo-600', 'bg-fuchsia-600',
  // Reds
  'bg-red-600', 'bg-rose-600', 'bg-pink-600', 'bg-crimson-600',
  // Greens
  'bg-green-600', 'bg-emerald-600', 'bg-teal-600', 'bg-lime-600',
  // Warm Colors
  'bg-amber-600', 'bg-orange-600', 'bg-yellow-600',
  // Cool Colors
  'bg-slate-600', 'bg-zinc-600', 'bg-stone-600',
  // Rich Colors
  'bg-cyan-700', 'bg-teal-700', 'bg-emerald-700', 'bg-violet-700',
  // Deep Colors
  'bg-indigo-700', 'bg-purple-700', 'bg-fuchsia-700', 'bg-rose-700'
];

const Timeline = ({ title, events }) => {
  // Log props for debugging
  console.log('Timeline Props Received:', { title, events, type: typeof events });

  // Handle events prop: parse if string, ensure array
  let eventList = events;
  if (typeof events === 'string') {
    try {
      eventList = JSON.parse(events);
      console.log('Parsed Events:', eventList);
    } catch (e) {
      console.error('Error parsing events:', e);
      eventList = [];
    }
  } else if (!Array.isArray(events)) {
    console.warn('Events is not an array or string:', events);
    eventList = [];
  }

  console.log('Final Event List:', eventList);

  return (
    <div className="section my-6">
      <div className="flex items-center gap-3 mb-6">
        <FontAwesomeIcon 
          icon={Icons.faClockRotateLeft} 
          className="h-6 w-6 text-gray-700"
        />
        <h2 className="section-title text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="timeline relative">
        {eventList.length > 0 ? (
          eventList.map((event, index) => {
            const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            const isLast = index === eventList.length - 1;
            const icon = iconMap[event.icon] || Icons.faQuestion;

            return (
              <div key={index} className="timeline-item flex flex-col md:flex-row mb-8">
                <div className={`timeline-marker relative ${isLast ? 'timeline-marker-last' : ''}`}>
                  <div className={`w-10 h-10 rounded-full ${randomColor} flex items-center justify-center text-white shadow-md`}>
                    <FontAwesomeIcon icon={icon} className="h-5 w-5" />
                  </div>
                  {!isLast && (
                    <div className="absolute top-10 left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2" />
                  )}
                </div>
                <div className="timeline-content md:ml-6 mt-4 md:mt-0">
                  <h3 className="font-bold text-lg text-gray-800">{event.heading}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600">No events provided.</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;