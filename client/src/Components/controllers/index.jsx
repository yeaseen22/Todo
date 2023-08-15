// import React from "react";
// import { Row, Col } from "reactstrap";

// import SearchPanel from "./search-panel";
// import FilterController from "./filter-controller";
// import BulkController from "./bulk-controller";
// import ViewController from "./view-controller";

// const Controllers = ({
//   term,
//   view,
//   changeView,
//   handleSearch,
//   toggleForm,
//   handleFilter,
//   clearSelected,
//   clearCompleted,
//   reset
// }) => (
//   <div>
//     <SearchPanel
//       term={term}
//       handleSearch={handleSearch}
//       toggleForm={toggleForm}
//     />
    
//     <Row className="my-4">
//       <Col md={{ size: 4 }}>
//         <FilterController handleFilter={handleFilter} />
//       </Col>

//       <Col md={{ size: 4 }}>
//         <ViewController view={view} changeView={changeView} />
//       </Col>

//       <Col md={{ size: 4 }} className="d-flex">
//         <div className="ml-auto">
//         <BulkController 
//             clearSelected={clearSelected}
//             clearCompleted={clearCompleted}
//             reset={reset}
//         /> 
//         </div>
//       </Col>
      
//     </Row>
//   </div>
// );

// export default Controllers;




import React from "react";
import { Row, Col } from "reactstrap";

import SearchPanel from "./search-panel";
import FilterController from "./filter-controller";
import BulkController from "./bulk-controller";
import ViewController from "./view-controller";

const Controllers = ({
  term,
  view,
  changeView,
  handleSearch,
  toggleForm,
  handleFilter,
  clearSelected,
  clearCompleted,
  reset
}) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    
    <Row className="my-4 justify-content-between" >
      <Col md={12}>
        <div className="d-flex justify-content-between">
          <div className="">
            <FilterController handleFilter={handleFilter} />
          </div>
          <div className="justify-content-between">
            <ViewController view={view} changeView={changeView} />
          </div>
          <div  className="m-1">
            <BulkController 
              clearSelected={clearSelected}
              clearCompleted={clearCompleted}
              reset={reset}
            />
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Controllers;
