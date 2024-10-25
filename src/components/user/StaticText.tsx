import Image from "next/image";
import React from "react";

const StaticText = () => {
  return (
    <div className="flex flex-col ml-10">
      <div className="mb-10">
        <h3 className="text-2xl mb-6 font-semibold">Кратка биографија</h3>
        <p>
          The user is a dedicated HR professional with a wealth of experience in
          the industry. Recognized for their skills, they have played a key role
          in numerous projects, driving innovation and helping organizations
          meet their objectives. With a strong background in their field, they
          consistently seek opportunities to improve processes, lead teams, and
          stay at the forefront of industry developments. In addition to their
          professional achievements, the user enjoys hobbies that enhance their
          creativity and problem-solving skills.
        </p>
      </div>

      <div>
        <h3 className="text-2xl mb-6 font-semibold">Препораки:</h3>
        <div className="mb-4">
          <div className="flex items-center">
            <Image
              src="/img/banner/image2.png"
              alt="image"
              width={50}
              height={80}
              className="rounded-b-full"
            />
            <div className="ml-2">
              <span className="block">Франко</span>
              <span className="block text-gray-500">пред 9 минути</span>
            </div>
          </div>
          <p>Неверојатно, дефинитивно препорачувам</p>
        </div>
        <div>
          <div className="flex items-center ">
            <Image
              src="/img/banner/image2.png"
              alt="image"
              width={50}
              height={80}
              className="rounded-b-full"
            />
            <div className="ml-2">
              <span className="block">Боби</span>
              <span className="block text-gray-500">пред 1 ден</span>
            </div>
          </div>
          <p>Интересна перспектива</p>
        </div>
      </div>
    </div>
  );
};

export default StaticText;
