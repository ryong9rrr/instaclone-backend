import AWS from "aws-sdk";

//생성한 user에 접속
AWS.config.update({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadToS3 = async (file, userId, folderName) => {
  const { filename, createReadStream } = await file;
  const fileStream = createReadStream();
  const objName = `${userId}-${Date.now()}-${filename}`;

  const data = await new AWS.S3({ apiVersion: "2006-03-01" })
    .upload({
      Bucket: process.env.S3_STORAGE,
      Key: objName,
      ACL: "public-read",
      Body: fileStream,
    })
    .promise();
  console.log(data);

  return "";
};
