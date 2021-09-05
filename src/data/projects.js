import bloom from "../images/bloom.png";
import ehr from "../images/ehr.jpg";
import pixel from "../images/pixel.png";
import plant from "../images/plantdisease.jpg";
import sih from "../images/sih.png";

// TODO Add a couple lines about each project
const data = [
  {
    title: "Electronic Health Records - Blockchain",
    link: "https://github.com/kaustubh1955/hyperledger_EHR",
    image: ehr,
    date: "2021-03-20",
    desc: "Designed and developed a secure system to store and transfer Electronic Health Records over private blockchains using Hyperledger fabric. ",
  },
  {
    title: "Bloom's Taxonomy Classification - Neural Networks",
    link: "https://github.com/kaustubh1955/blooms-taxonomy",
    image: bloom,
    date: "2021-05-20",
    desc: "Fully funded by Teaching Learning Center, BITS Pilani. Build a classifier to classify questions according to Bloom’s Taxonomy using LSTM. Achieved an accuracy of 96.25%. Built an android app to provide the appropriate interface.",
  },
  {
    title: "Plant Disease Recognitoin - Computer Vision",
    link: "https://github.com/kaustubh1955/Plant-Disease-Recognition",
    image: plant,
    date: "2020-12-28",
    desc: "Trained an image classifier to diagnose plant diseases using light-weight MobileNet. Achieved an accuracy of 96.27%. Built an ad hoc website for this purpose.",
  },
  {
    title: "Pixel Deconvolution Network - Neural Networks",
    link: "https://github.com/kaustubh1955/pixelDeconvolution",
    image: pixel,
    date: "2020-09-15",
    desc: "Build Pixel Deconvolutional Layer, a modification of Deconvolution Layer to tackle the checkerboard effect by appropriate image segmentation. ",
  },
  {
    title: "Startupindia Dashboard - Web Development",
    image: sih,
    date: "2019-03-15",
    desc: "Won 1st price and a cash price of 50K INR at Smart India Hackathon. Built a dashboard for DPIIT to monitor the progress of different departments working for #startupindia project.(Can't share the code, sorry)",
  },
];

export default data;
