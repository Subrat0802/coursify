import React, { useState } from "react";
import InputTag from "../../ui/InputTag";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import { setCourseId } from "../../../slices/courseSlice";
import CreateSectionSubSection from "./CreateSectionSubSection";
import { createCourse } from "../../../services/operations/courseApi";
import PublishCourseSection from "./PublishCourseSection";

const CreateCourseForm = () => {

  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category.categories);
  const [formState, setFormState] = useState(1);
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    whatYouWillLearn: "",
    price: "",
    thumbnailImage: null,
    category: "",
  });

  const {title, description, whatYouWillLearn, price, thumbnailImage, category} = courseData;



  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    setCourseData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    if (!title || !description || !whatYouWillLearn || !price || !thumbnailImage || !category) {
      toast.error("Please fill all required fields and select a thumbnail image.");
      return;
    }

    const response = await createCourse(
      title,
      description,
      whatYouWillLearn,
      price,
      thumbnailImage,
      category
    );

    if (response.statusText === "OK") {
      toast.success(response.data.message);

        dispatch(setCourseId(response.data.data));
      setFormState(2);
    } else {
      toast.error(
        response.response?.data?.message || "Server error. Try again."
      );
    }
  };

  return (
    <div className="py-10 px-4 sm:px-6">

      {/* progress bar */}
      <div className="flex items-center gap-4 justify-center mb-10">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}> <div
              className={`w-10 h-10 flex items-center justify-center rounded-full 
                font-semibold transition-all duration-300 ${ formState >= step ? "bg-violet-800 text-black border-2  border-violet-500"
                  : "bg-[#333] text-gray-400"
              }`}
            >
              {formState > step ? <FaCheck /> : step}
            </div>
            {step !== 3 && (
              <div
                className={`h-1 flex-1 ${
                  formState > step ? "bg-violet-600" : "bg-gray-700"
            }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* form step 1 */}
      {formState === 1 && (
        <div className="space-y-8 max-w-3xl mx-auto bg-[#121212] p-8 rounded-xl border border-[#2d2d2d] shadow-lg">
          {/* title */}

          <div>
            <label className="text-gray-300 text-sm mb-1 block">
              Course Title <span className="text-red-500">*</span>
            </label>
            <InputTag className={"w-full"} name="title" value={title} onChange={handleOnChange}
              placeholder="Enter course title"/>
          </div>

          {/* Description */}


          <div>
            <label className="text-gray-300 text-sm mb-1 block">
              Course Description <span className="text-red-500">*</span>
            </label>
              <InputTag
                className={"w-full"} name="description" value={description} onChange={handleOnChange}
                placeholder="Write a short description"
                />
          </div>

          {/* what you willl learn */}


          <div>
            <label className="text-gray-300 text-sm mb-1 block">
              What will students learn? <span className="text-red-500">*</span>
            </label>
            <InputTag
              className={"w-full"} name="whatYouWillLearn" value={whatYouWillLearn} onChange={handleOnChange}
              placeholder="e.g. Fundamentals of React, MongoDB basics..."
            />
          </div>

          {/* price */}
          <div>
            <label className="text-gray-300 text-sm mb-1 block">
              Price <span className="text-red-500">*</span>
            </label>
            <InputTag
              className={"w-full"}
              name="price"
              value={price}
              onChange={handleOnChange}
              placeholder="Enter price (e.g. 999)"
            />
          </div>

          {/* category */}



          <div>
            <label className="text-gray-300 text-sm mb-1 block">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={category}
              onChange={handleOnChange}
              className="w-full bg-[#1c1c1c] text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              <option value="">Select a category</option>
              {categoryData?.map((el) => (
                <option key={el._id} value={el._id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>

          {/*thumbnail image */}


          <div >
            <label className="text-gray-300 text-sm mb-2 block">
              Thumbnail Image <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col justify-center items-center  border border-white/10 gap-2 bg-[#1c1c1c] p-4 rounded-md ">
              <label
                htmlFor="thumbnailImage"
                className="cursor-pointer inline-block w-fit px-4 py-2 border border-violet-500 text-violet-400 rounded hover:bg-violet-600 hover:text-black transition"
              >
                Choose File
              </label>
              {thumbnailImage ? (
                <div className="text-white text-sm flex gap-3 items-center">
                  {thumbnailImage.name}
                  <button
                    type="button"
                    onClick={() =>
                      setCourseData((prev) => ({
                        ...prev,
                        thumbnailImage: null,
                      }))
                    }
                    className="text-red-500 text-xs hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-400">No file selected</p>
              )}

              <input
                type="file" id="thumbnailImage" name="thumbnailImage"
                accept="image/*"
                onChange={handleOnChange}
                className="hidden"
              />
            </div>
          </div>

          

          {/* submit */}
          <div className="pt-4">
            <Button
              onClick={handleSubmit}
              text="Create Course"
              btn="secondary"
              classStyle="w-full"
            />
          </div>
        </div>
      )}

      {/* Step 2: Section/Subsection */}
      {formState === 2 && <CreateSectionSubSection setFormState={setFormState}/>}

      {formState === 3 && <PublishCourseSection setFormState={setFormState}/>}
    </div>
  );
};

export default CreateCourseForm;
