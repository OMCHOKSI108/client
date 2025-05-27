// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaStar } from 'react-icons/fa';
// import { Client, Databases, ID, Query } from 'appwrite';
// import { toast } from 'react-hot-toast';

// // Initialize Appwrite client
// const client = new Client();
// client
//   .setEndpoint('https://fra.cloud.appwrite.io/v1')
//   .setProject('681364a5001f94f6a006');

// // Initialize Databases service
// const databases = new Databases(client);

// // Database and collection IDs
// const DATABASE_ID = '68136514003b268a99cd';
// const COLLECTION_ID = '6813a62b0011e1c6cb9f';

// const FeedbackModal = ({ isOpen, onClose }) => {
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');
//   const [isAnonymous, setIsAnonymous] = useState(true);
//   const [name, setName] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [latestFeedback, setLatestFeedback] = useState(null);

//   const fetchLatestFeedback = async () => {
//     try {
//       const response = await databases.listDocuments(
//         DATABASE_ID,
//         COLLECTION_ID,
//         [Query.orderDesc('$createdAt'), Query.limit(1)]
//       );
//       if (response.documents.length > 0) {
//         setLatestFeedback(response.documents[0]);
//       }
//     } catch (error) {
//       console.error('Error fetching latest feedback:', error);
//     }
//   };

//   const handleSubmit = async () => {
//     if (rating === 0) return;
    
//     setIsSubmitting(true);
//     try {
//       await databases.createDocument(
//         DATABASE_ID,
//         COLLECTION_ID,
//         ID.unique(),
//         {
//           rating,
//           comment,
//           isAnonymous,
//           name: isAnonymous ? 'Anonymous' : name
//         }
//       );
      
//       // Store in localStorage that user has submitted feedback
//       localStorage.setItem('hasSubmittedFeedback', 'true');
      
//       // Fetch the latest feedback
//       await fetchLatestFeedback();
      
//       // Show success state
//       setIsSubmitted(true);
      
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//       toast.error('Failed to submit feedback. Please try again.', {
//         duration: 3000,
//         position: 'top-center',
//         style: {
//           background: '#1a1a1a',
//           color: '#ff4444',
//           border: '1px solid #ff4444',
//         },
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleClose = () => {
//     setIsSubmitted(false);
//     setRating(0);
//     setComment('');
//     setIsAnonymous(true);
//     setName('');
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             className={`bg-[#1a1a1a] border border-[#00FF7F]/30 rounded-lg p-6 w-full max-w-md mx-4 ${
//               isSubmitted ? 'min-h-[400px]' : ''
//             }`}
//           >
//             {!isSubmitted ? (
//               <>
//                 <h2 className="text-2xl font-bold text-white mb-4 font-fira">
//                   How I am doing? 
//                 </h2>
                
//                 {/* Star Rating */}
//                 <div className="flex gap-2 mb-4">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <motion.button
//                       key={star}
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       onClick={() => setRating(star)}
//                       className="text-2xl"
//                     >
//                       <FaStar
//                         className={`${
//                           star <= rating ? 'text-[#00FF7F]' : 'text-gray-600'
//                         }`}
//                       />
//                     </motion.button>
//                   ))}
//                 </div>

//                 {/* Comment Input */}
//                 <input
//                   type="text"
//                   value={comment}
//                   onChange={(e) => setComment(e.target.value)}
//                   placeholder="Anything you'd like to share?"
//                   className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 text-white mb-4 focus:outline-none focus:border-[#00FF7F]"
//                 />

//                 {/* Name Input (shown when not anonymous) */}
//                 {!isAnonymous && (
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Your name"
//                     className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-2 text-white mb-4 focus:outline-none focus:border-[#00FF7F]"
//                   />
//                 )}

//                 {/* Anonymous Toggle */}
//                 <div className="flex items-center gap-2 mb-6">
//                   <input
//                     type="checkbox"
//                     id="anonymous"
//                     checked={isAnonymous}
//                     onChange={(e) => {
//                       setIsAnonymous(e.target.checked);
//                       if (e.target.checked) setName('');
//                     }}
//                     className="w-4 h-4 text-[#00FF7F] bg-gray-700 border-gray-600 rounded focus:ring-[#00FF7F]"
//                   />
//                   <label htmlFor="anonymous" className="text-sm text-gray-400">
//                     Post anonymously
//                   </label>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-4">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleSubmit}
//                     disabled={isSubmitting || rating === 0 || (!isAnonymous && !name)}
//                     className={`flex-1 py-2 px-4 rounded-lg text-white font-bold ${
//                       rating === 0 || (!isAnonymous && !name)
//                         ? 'bg-gray-600'
//                         : 'bg-[#00FF7F] hover:bg-[#00cc66]'
//                     } transition-colors duration-300`}
//                   >
//                     {isSubmitting ? 'Submitting...' : 'Submit'}
//                   </motion.button>
                  
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={onClose}
//                     className="flex-1 py-2 px-4 rounded-lg text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     Later
//                   </motion.button>
//                 </div>
//               </>
//             ) : (
//               <div className="flex flex-col items-center justify-center h-full space-y-6">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="w-16 h-16 bg-[#00FF7F] rounded-full flex items-center justify-center"
//                 >
//                   <FaStar className="text-2xl text-[#121212]" />
//                 </motion.div>
                
//                 <h2 className="text-2xl font-bold text-white text-center font-fira">
//                   Thank You for Your Feedback!
//                 </h2>
                
//                 {latestFeedback && (
//                   <div className="w-full space-y-4">
//                     <div className="flex items-center gap-1 justify-center">
//                       {[...Array(5)].map((_, i) => (
//                         <FaStar
//                           key={i}
//                           className={`w-4 h-4 ${
//                             i < latestFeedback.rating
//                               ? 'text-[#00FF7F]'
//                               : 'text-gray-600'
//                           }`}
//                         />
//                       ))}
//                     </div>
                    
//                     {latestFeedback.comment && (
//                       <p className="text-white text-sm text-center italic">
//                         "{latestFeedback.comment}"
//                       </p>
//                     )}
                    
//                     <p className="text-gray-400 text-xs text-center">
//                       — {latestFeedback.name}
//                     </p>
//                   </div>
//                 )}
                
//                 <div className="flex gap-4 mt-6">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleClose}
//                     className="px-6 py-2 rounded-lg text-white font-bold bg-[#00FF7F] hover:bg-[#00cc66] transition-colors duration-300"
//                   >
//                     Close
//                   </motion.button>
//                 </div>
//               </div>
//             )}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default FeedbackModal; 