import React from "react";
import InputTag from "../../ui/InputTag";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { useState } from "react";
import { createCourse, createSection } from "../../../services/operations/courseApi";
import toast from "react-hot-toast";
// import { Check } from 'lucide-react';
import { FaCheck, FaPlus } from "react-icons/fa6";
import { setCourseId } from "../../../slices/courseSlice";
import { setUserData } from '../../../slices/authSlice';
import { getUser } from '../../../services/operations/authApi';

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

  console.log("cousreInputs:", courseData);

  const {
    title,
    description,
    whatYouWillLearn,
    price,
    thumbnailImage,
    category,
  } = courseData;

  const handleOnChange = (e) => {
    const { name, value, files } = e.target;
    setCourseData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
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
      toast.error(response.response?.data?.message || "Server error. Try again.");
    }
  };

  // COURSE PART TWO FORM
  const [sectionName, setSectionName] = useState("");
  console.log("sectionName", sectionName)
  const courseId = useSelector((state) => state.course.courseId);
  const handleChange = (e) => {
    setSectionName(e.target.value);
  }
  const handleCourseBuilder = async () => {
      try{
        const response = await createSection(sectionName, courseId)
        console.log("Section creation phase", response);
        // Fetch updated user data and update Redux
        const updatedUserData = await getUser();
        dispatch(setUserData(updatedUserData));
        // Optionally, clear the section input
        setSectionName("");
      }catch(error){
        console.log(error);
      }
  };
  return (
    <div>
      {/* progress bar  */}
      <div className="flex  justify-center pt-6">
        <div
          className={`flex justify-center items-center border-2 p-3 rounded-full px-5 ${
            formState === 2 && ""
          } text-violet-800 border-violet-800 font-bold bg-violet-500`}
        >
          {formState === 2 ? <FaCheck /> : 1}
        </div>
        <div className=" w-[20%] flex justify-center items-center">
          <div
            className={`w-full border ${
              formState === 2 && "border-violet-800 "
            }`}
          ></div>
        </div>
        <div
          className={`border p-3 rounded-full px-5 ${
            formState === 2 &&
            "border-2  text-violet-800 border-violet-800 font-bold bg-violet-500"
          }`}
        >
          2
        </div>
        <div className=" w-[20%] flex justify-center items-center">
          <div className="w-full border"></div>
        </div>
        <div className="border p-3 rounded-full px-5">3</div>
      </div>

      {formState === 1 && (
        <div className="flex flex-col gap-6 mt-10 rounded-xl p-10 max-w-3xl mx-auto bg-[#131313]">
          <h2 className="text-xl font-semibold border-b pb-2">
            Create a New Course
          </h2>
          <label className="flex flex-col gap-1">
            <p>
              Course Title:<sup className="text-red-700">*</sup>
            </p>
            <InputTag
              placeholder={"Title"}
              onChange={(e) => handleOnChange(e)}
              name="title"
              value={courseData.title}
            />
          </label>

          <label className="flex flex-col">
            <p>
              Course Description:<sup className="text-red-700">*</sup>
            </p>
            <InputTag
              placeholder={"Description"}
              onChange={(e) => handleOnChange(e)}
              name="description"
              value={courseData.description}
            />
          </label>

          <label className="flex flex-col">
            <p>
              What students will learn:<sup className="text-red-700">*</sup>
            </p>
            <InputTag
              placeholder={"What studnts will learn"}
              onChange={(e) => handleOnChange(e)}
              name="whatYouWillLearn"
              value={courseData.whatYouWillLearn}
            />
          </label>

          <label className="flex flex-col">
            <p>
              Price:<sup className="text-red-700">*</sup>
            </p>
            <InputTag
              placeholder={"Price"}
              onChange={(e) => handleOnChange(e)}
              name="price"
              value={courseData.price}
            />
          </label>

          <label>
            <p>
              Category:<sup className=" text-red-700">*</sup>
            </p>
            <select
              name="category"
              value={courseData.category}
              onChange={(e) => handleOnChange(e)}
              className="py-3 w-full px-2 rounded-lg bg-[#1b1a1b] focus:outline focus:outline-1 focus:outline-gray-700 "
            >
              {categoryData &&
                categoryData.map((el) => (
                  <option
                    className="mt-1 text-white bg-[#1b1a1b]"
                    key={el._id}
                    value={el._id}
                  >
                    {el.name}
                  </option>
                ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <p className="text-sm text-white">
              Thumbnail image <sup className="text-red-700">*</sup>
            </p>

            <div className="flex flex-col gap-3 py-7 items-center justify-center bg-[#1b1a1b] rounded-lg ">
              <label
                htmlFor="thumbnailImage"
                className="cursor-pointer border  text-white/70 px-4 py-2 rounded-md hover:text-violet-100 transition"
              >
                Choose File
              </label>
              <span className=" text-white text-sm">
                {courseData.thumbnailImage ? (
                  <div className="flex gap-4">
                    {courseData.thumbnailImage.name} {" "}
                    <p
                      type="button"
                      onClick={() =>
                        setCourseData((prev) => ({
                          ...prev,
                          thumbnailImage: null,
                        }))
                      }
                      className="text-red-800 hover:text-red-600"
                    >
                      del
                    </p>
                  </div>
                ) : (
                  "No file chosen"
                )}
              </span>
              <input
                id="thumbnailImage"
                type="file"
                name="thumbnailImage"
                accept="image/*"
                onChange={handleOnChange}
                className="hidden"
              />
            </div>
          </label>

          <Button
            onClick={handleSubmit}
            classStyle="mt-2"
            text={"Create Course"}
            btn="secondary"
          />
        </div>
      )}

      {formState === 2 && (
        <div className="bg-[#131313] p-5 border border-white/10 rounded-lg mt-7">
          <p>Course Builder</p>
          <div className="mt-8">
            <InputTag className={"w-full"} placeholder={"Add Section Name"} onChange={(e) => handleChange(e)}/>
            <Button
              icon={<FaPlus />}
              classStyle={"mt-3"}
              text={"Create Section"}
              btn={"teritory"}
              onClick={handleCourseBuilder}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateCourseForm;
