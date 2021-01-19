// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import ItinEditorHeader from './ItinEditorHeader'
// import ItinEditor from './ItinEditor'

// function ItinNewView() {
//   const displayView = (
//     <div className="itin-editor-frame">
//       <ItinEditorHeader
//         isEdit={isEdit}
//         isPublish={isPublish}
//         isMe={isMe}
//         title={dataFromDB[0].title}
//       />
//       <main className="d-flex justify-content-between">
//         <div>
//           <ItinEditorBasicData
//             isEdit={isEdit}
//             isPublish={isPublish}
//             memberName={dataFromDB[0].member_name}
//             avatar={'testImage.jpg'}
//             area={'北部'}
//             town={'台北'}
//           />
//           <ItinEditor
//             isEdit={false} //任何情況下的publish頁都不需要修改功能
//             boxData={dataFromDB[1]}
//           />
//         </div>
//         <div>
//           <ItinEditorDetail isEdit={isEdit} boxData={dataFromDB[1]} />
//         </div>
//       </main>
//     </div>
//   )
//   return displayView
// }

// export default ItinNewView
