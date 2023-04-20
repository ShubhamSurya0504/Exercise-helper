import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youTubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [youTubeVideosData, setYouTubeVideosData] = useState([]);
  const [muscleExerciseData, setMuscleExerciseData] = useState([]);
  const [equipmentExerciseData, setEquipmentExerciseData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youTubeVideoUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailsData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(exerciseDetailsData);
      const youTubeVideos = await fetchData(
        `${youTubeVideoUrl}/search?query=${exerciseDetailsData.name}`,
        youTubeOptions
      );
      setYouTubeVideosData(youTubeVideos.contents);

      const targetMuscleData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
        exerciseOptions
      );
      setMuscleExerciseData(targetMuscleData);

      const equipmentData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
        exerciseOptions
      );
      setEquipmentExerciseData(equipmentData);
    };

    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideos
        youTubeVideosData={youTubeVideosData}
        name={exerciseDetails.name}
      />
      <SimilarExercises
        targetMuscleExercises={muscleExerciseData}
        equipmentExercises={equipmentExerciseData}
      />
    </Box>
  );
};

export default ExerciseDetails;
