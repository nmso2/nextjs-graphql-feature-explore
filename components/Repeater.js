import { useState } from "react";

const Repeater = () => {
  const [newFeatures, setNewFeatures] = useState([
    {
      id: 1,
      label: "New Feature 1",
      name: "new_feature_1",
      placeHolder1: "Feature Name",
      placeHolder2: "Feature Value",
      value: "",
      status: true,
    },
  ]);

  // new features handler
  const addNewFeaturesHandler = () => {
    setNewFeatures([
      ...newFeatures,
      {
        id: newFeatures.length + 1,
        label: `New Feature ${newFeatures.length + 1}`,
        name: `new_feature_${newFeatures.length + 1}`,
        placeHolder1: "Feature Name",
        placeHolder2: "Feature Value",
        value: "",
        status: true,
      },
    ]);
  };

  // edit label handler
  const editLabelHandler = (id) => {
    let index = newFeatures.findIndex((item) => item.id == id);
    const againNewFt = [...newFeatures];

    if (againNewFt[index].status === true) {
      againNewFt[index].status = false;
    } else {
      againNewFt[index].status = true;
    }

    setNewFeatures([...againNewFt]);
  };

  // label change handler
  const labelChangeHandler = (e, id) => {
    let labelIndex = newFeatures.findIndex((item) => item.id == id);
    const againNewFeat = [...newFeatures];
    againNewFeat[labelIndex].label = e.target.value;
    setNewFeatures([...againNewFeat]);
  };

  // new features value change handler
  const valueChangeHandler = (e, id) => {
    let valueIndex = newFeatures.findIndex((item) => item.id == id);
    const newFeatValue = [...newFeatures];
    newFeatValue[valueIndex].value = e.target.value;
    setNewFeatures([...newFeatValue]);
  };

  // delete new features handler
  const deleteNewFeaturesHandler = (id) => {
    //console.log("delete new features :: ", id);
    let featuresAfterDelete = newFeatures.filter((item) => item.id !== id);

    // console.log("array after delete :: ", featuresAfterDelete);

    featuresAfterDelete.forEach((item) => {
      if (item.id > id) {
        item.id = item.id - 1;
        item.label = `New Feature ${item.id}`;
        item.name = `new_feature_${item.id}`;
      }
    });

    setNewFeatures([...featuresAfterDelete]);
  };

  return (
    <div>
      {/* new features  */}
      {newFeatures.map((newInputField, index) => (
        <div className="row mb-2" key={index}>
          {/* label  */}
          <div className="col-md-3 input-group input-group-sm">
            {newInputField.status ? (
              <span
                onClick={() => editLabelHandler(newInputField.id)}
                className="spanTitle text-capitalize"
              >
                {newInputField.label}
              </span>
            ) : (
              <input
                type="text"
                onBlur={() => editLabelHandler(newInputField.id)}
                onChange={(e) => labelChangeHandler(e, newInputField.id)}
                className="form-control productInput input-sm"
                name="editable_label_name"
                placeholder={newInputField.placeHolder1}
              />
            )}
          </div>

          {/* input field  */}
          <div
            className={
              newInputField.id === 1
                ? "col-md-9 input-group input-group-sm"
                : "col-md-8 input-group input-group-sm"
            }
          >
            <input
              type="text"
              onChange={(e) => valueChangeHandler(e, newInputField.id)}
              className="form-control productInput input-sm"
              id="warningQty"
              name={newInputField.name}
              placeholder={newInputField.placeHolder2}
              defaultValue={newInputField.value}
            />
          </div>

          {/* cross button  */}
          {newInputField.id !== 1 && (
            <div className="col-md-1 input-group input-group-sm m-0 p-0">
              <button
                type="button"
                style={{
                  backgroundColor: "transparent",
                }}
              >
                <i
                  className="fa fa-close ml-0"
                  onClick={() => deleteNewFeaturesHandler(newInputField.id)}
                  style={{
                    cursor: "pointer",
                    padding: "5px",
                    backgroundColor: "white",
                    color: "black",
                    fontSize: "12px",
                    borderRadius: "50%",
                  }}
                ></i>
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="my-2">
        <button
          type="button"
          className="btn btn-info btn-sm"
          onClick={addNewFeaturesHandler}
        >
          + Add New
        </button>
      </div>
      {/* end new features  */}
    </div>
  );
};

export default Repeater;
