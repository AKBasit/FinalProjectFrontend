// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// export default function WebDesignCardDetails({ webDesigns }) {
//   const { webDesignId } = useParams();
//   const [webDesignDetail, setWebDesignDetail] = useState(null);

//   const handleDelete = async (id) => {
//     try {
//       //make an axios call to the back to delete the todo as well
//       const { data } = await axios.delete(
//         `http://localhost:5005/web-design/${id}`
//       );
//       console.log("design was deleted ", data);
//     } catch (err) {
//       console.log("there was an error deleting", err);
//     }

//     // perfect for the DOM
//     const filteredWebDesigns = webDesigns.filter((curr) => {
//       if (curr._id !== id) {
//         return true;
//       }
//     });
//     setWebDesigns(filteredWebDesigns);
//   };

//   useEffect(() => {
//     const fetchWebDesign = async () => {
//       try {
//         const { data } = await axios.get(
//           `http://localhost:5005/web-design/${webDesigns._id}`
//         );
//         console.log("found", data);
//         setWebDesignDetail([data]); // Update state with the fetched data as an array
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchWebDesign();
//   }, [webDesignId]);

//   useEffect(() => {
//     if (webDesigns) {
//       const webDesignData = webDesigns.find((element) => {
//         if (element.id == webDesignId) {
//           return true;
//         }
//       });
//       console.log(webDesignData);
//       setWebDesignDetail(webDesignData);
//     }
//   }, [webDesignId]);
//   if (!webDesigns) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <div className="card">
//       <h3>{webDesign.name}</h3>
//       <h6>{webDesign.description}</h6>
//       {/* If the function onDelete was sent, then show the button else (:) show nothing */}
//       <button
//         onClick={() => {
//           handleDelete(webDesign._id);
//         }}
//         className="py-4"
//       >
//         Delete
//       </button>
//       {/* <Link to={`/character/edit/${webDesign._id}`}>
//         <button>Edit Character</button>
//       </Link> */}
//     </div>
//   );
// }
