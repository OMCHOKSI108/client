// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar, FaComment, FaTimes } from 'react-icons/fa';
// import { Client, Databases, Query } from 'appwrite';

// // Initialize Appwrite client
// const client = new Client();
// client
//   .setEndpoint('https://fra.cloud.appwrite.io/v1')
//   .setProject('681364a5001f94f6a006');

// // Initialize services
// const databases = new Databases(client);

// // Database and collection IDs
// const DATABASE_ID = '68136514003b268a99cd';
// const COLLECTION_ID = '6813a62b0011e1c6cb9f';

// const FeedbackList = ({ onOpenFeedback }) => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     // Initial fetch
//     fetchFeedbacks();

//     // Subscribe to realtime updates using client.subscribe
//     const unsubscribe = client.subscribe(
//       `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`,
//       (response) => {
//         if (response.events.includes('databases.*.collections.*.documents.*.create')) {
//           fetchFeedbacks();
//         }
//       }
//     );

//     // Auto-rotate feedbacks
//     let interval;
//     if (isPlaying && feedbacks.length > 0 && isVisible) {
//       interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
//       }, 5000);
//     }

//     return () => {
//       unsubscribe();
//       if (interval) clearInterval(interval);
//     };
//   }, [feedbacks.length, isPlaying, isVisible]);

//   const fetchFeedbacks = async () => {
//     try {
//       const response = await databases.listDocuments(
//         DATABASE_ID,
//         COLLECTION_ID,
//         [
//           Query.orderDesc('$createdAt'),
//           Query.limit(10)
//         ]
//       );
//       setFeedbacks(response.documents);
//     } catch (error) {
//       console.error('Error fetching feedbacks:', error);
//     }
//   };

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   if (feedbacks.length === 0) return null;

//   return (
//     <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-[100]">
//       {/* Feedback Flash Card */}
//       <AnimatePresence mode="wait">
//         {isPlaying && isVisible && (
//           <motion.div
//             key={currentIndex}
//             initial={{ opacity: 0, y: 20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -20, scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//             className="w-80 bg-[#1a1a1a]/90 backdrop-blur-sm border border-[#00FF7F]/30 rounded-lg p-4 shadow-lg relative"
//           >
//             {/* Close Button */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleClose}
//               className="absolute -top-2 -right-2 w-6 h-6 bg-[#00FF7F] rounded-full flex items-center justify-center shadow-lg hover:bg-[#00cc66] transition-colors duration-300"
//             >
//               <FaTimes className="text-[#121212] w-3 h-3" />
//             </motion.button>

//             <div className="space-y-3">
//               <div className="flex items-center gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     className={`w-4 h-4 ${
//                       i < feedbacks[currentIndex].rating
//                         ? 'text-[#00FF7F]'
//                         : 'text-gray-600'
//                     }`}
//                   />
//                 ))}
//               </div>
              
//               {feedbacks[currentIndex].comment && (
//                 <p className="text-white text-sm line-clamp-2 italic">
//                   "{feedbacks[currentIndex].comment}"
//                 </p>
//               )}
              
//               <div className="flex justify-between items-center text-xs text-gray-400">
//                 <span>— {feedbacks[currentIndex].name}</span>
//                 <span>{new Date(feedbacks[currentIndex].$createdAt).toLocaleDateString()}</span>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Feedback Button */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={() => {
//           setIsPlaying(false);
//           onOpenFeedback();
//         }}
//         className="w-12 h-12 bg-[#00FF7F] rounded-full flex items-center justify-center shadow-lg hover:bg-[#00cc66] transition-colors duration-300"
//       >
//         <FaComment className="text-[#121212] w-5 h-5" />
//       </motion.button>
//     </div>
//   );
// };

// export default FeedbackList; 