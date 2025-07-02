import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createSection,
  createSubSection,
} from "../../../services/operations/courseApi";
import { getUser } from "../../../services/operations/authApi";
import { setUserData } from "../../../slices/authSlice";
import InputTag from "../../ui/InputTag";
import { FaPlus, FaVideo } from "react-icons/fa6";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

const CreateSectionSubSection = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [sectionName, setSectionName] = useState("");
  const courseId = useSelector((state) => state.course.courseId);
  const handleChange = (e) => {
    setSectionName(e.target.value);
  };
  const handleCourseBuilder = async () => {
    setLoading(true);
    loading ? toast.loading("Creating Course") : "";
    try {
      const response = await createSection(sectionName, courseId);
      setSectionName("");
      console.log("Section creation phase", response);
      // Fetch updated user data and update Redux
      const updatedUserData = await getUser();
      dispatch(setUserData(updatedUserData));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [showSubSectionFileUpload, setShowSubSectionFileUpload] = useState("");
  const handleShowSubSection = (id) => {
    setShowSubSectionFileUpload(id);
  };
  const userDataForSection = useSelector(
    (state) => state.auth.userData.courses
  );

  const [subSectionForm, setSubSectionForm] = useState({
    title: "",
    description: "",
    videoUrl: null,
  });

  const handleOnChnage = (e) => {
    const { name, value, files } = e.target;
    setSubSectionForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const { title, description, videoUrl } = subSectionForm;

  const handleCreateSubSection = async (sectionId) => {
    setLoading(true);
    const toastId = toast.loading("Uploading Video");
    try {
      const response = await createSubSection(
        title,
        description,
        sectionId,
        videoUrl
      );
      console.log("FRONT PAGE subsection creation", response);
      const useDataUpdated = await getUser();
      dispatch(setUserData(useDataUpdated));
      setSubSectionForm({
        title: "",
        description: "",
        videoUrl: null,
      })
      setLoading(false);
    } catch (error) {
      console.log("FRONT PAGE subsection creation error", error);
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#131313] p-6 border border-white/10 rounded-2xl mt-10 shadow-md">
  <p className="text-2xl font-bold text-white mb-6">Course Builder</p>
  <div className="space-y-6">
    {userDataForSection &&
      courseId &&
      userDataForSection
        .find((el) => el._id === courseId._id)
        ?.courseContent?.map((el) => (
          <div key={el._id} className="bg-[#1b1b1b] p-5 rounded-xl border border-white/10">
            {/* section header */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-semibold text-white capitalize">{el.sectionName}</p>
              <Button
                onClick={() => handleShowSubSection(el._id)}
                text="Add Sub Section"
                classStyle="text-sm"
                btn="teritory"
                icon={<FaPlus />}
              />
            </div>

            {/* subSection videos */}
                <div className="flex flex-col gap-2 mb-4">
                  {el.subSection &&
                    el.subSection.map((subEl) => (
                      <div
                        key={subEl._id}
                        className={`${el.subSection && "p-3"} flex items-center gap-3 bg-gray-800 text-white font-medium  rounded-lg hover:bg-gray-800 transition`}
                      >
                        <FaVideo className="text-violet-400" />
                        <span className="truncate">{subEl.title}</span>
                      </div>
                    ))}
                </div>

            {/* upload subSection frm */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col border-t border-white/10 ${
                showSubSectionFileUpload === el._id
                  ? "max-h-[400px] opacity-100 mt-5 pt-5 px-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-4 mb-4">
                <InputTag
                  value={subSectionForm.title}
                  name="title"
                  onChange={handleOnChnage}
                  className="border border-white/10 bg-[#0f0f0f] text-white"
                  placeholder="Add video title"
                />
                <InputTag
                  value={subSectionForm.description}
                  name="description"
                  onChange={handleOnChnage}
                  className="border border-white/10 bg-[#0f0f0f] text-white"
                  placeholder="Add description"
                />
              </div>
              <div className="flex justify-between items-center gap-4">
                <InputTag
                  name="videoUrl"
                  onChange={handleOnChnage}
                  className="border border-white/10 bg-[#0f0f0f] text-white"
                  type="file"
                />
                <Button
                  text="Add"
                  btn="primary"
                  onClick={() => handleCreateSubSection(el._id)}
                />
              </div>
            </div>
          </div>
        ))}
  </div>

  {/* add section */}
      <div className="mt-10">
        <InputTag
          className="w-full border border-white/10 bg-[#0f0f0f] text-white"
          placeholder="Add Section Name"
          onChange={handleChange}
        />
        <div className="flex justify-between mt-6">
          <Button
            icon={<FaPlus />}
            text="Create Section"
            btn="teritory"
            onClick={handleCourseBuilder}
          />
          <Button text="Next" btn="secondary" classStyle="py-1" />
        </div>
      </div>
    </div>

  );
};

export default CreateSectionSubSection;
