import React, { useState } from 'react';
import { Button, MultiSelect, Select, TextInput } from '@mantine/core';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SVG from '../assets/undraw_diary_re_4jpc.svg';
import NextImage from 'next/image';

const Index = () => {
  const [data, setData] = useState([
    {
      value: 'Node.js',
      label: 'Node.js',
    },
    {
      value: 'Git',
      label: 'Git',
    },
    {
      value: 'Postman',
      label: 'Postman',
    },
    {
      value: 'Figma',
      label: 'Figma',
    },
  ]);

  const [formData, setFormData] = useState({
    full_name: '',
    roll_no: '',
    project_name: '',
    code_editor: '',
    operating_system: '',
    database: [],
    misc: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      formData.name === '' ||
      formData.roll_no === '' ||
      formData.project_name === '' ||
      formData.code_editor === '' ||
      formData.operating_system === '' ||
      formData.database === []
    ) {
      toast.error('Please Fill All Data!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
      });
      return;
    }

    toast.info('Submitting Data...', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 4000,
      toastId: 'submit',
    });

    const response = fetch(
      'https://college-requirement-form.herokuapp.com/user',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    )
      .then((data) => {
        toast.dismiss('submit');
        toast.success('Requirements Submitted!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setFormData({
          full_name: '',
          roll_no: '',
          project_name: '',
          code_editor: '',
          operating_system: '',
          database: [],
          misc: [],
        });
      })
      .catch((e) => {
        toast.error('Error Occured, Whatsapp Kardo Mujhe!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };

  return (
    <div className="flex-1 flex overflow-y-auto flex-col bg-gray-100 md:flex-row">
      <div className="w-full px-4 md:grid place-content-center md:w-1/2">
        <NextImage width={500} height={500} src={SVG.src} alt="" />
      </div>
      <div className="flex-1 w-full md:w-1/2 ml-auto">
        <ToastContainer
          position="bottom-right"
          newestOnTop={false}
          hideProgressBar={true}
          autoClose={4000}
        />

        <div className="px-2 py-4 md:px-24 flex flex-col justify-center">
          <h1 className="text-4xl mb-4">Submit Your System Requirements</h1>
          <form className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col gap-2 justify-between">
              <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <TextInput
                  placeholder="Your name"
                  className="w-full md:w-1/2"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData({ ...formData, full_name: e.target.value })
                  }
                  label="Full name"
                  required
                />

                <TextInput
                  className="w-full md:w-1/2"
                  placeholder="Roll Number"
                  value={formData.roll_no}
                  onChange={(e) =>
                    setFormData({ ...formData, roll_no: e.target.value })
                  }
                  label="College Roll Number"
                  required
                />
              </div>

              <TextInput
                placeholder="Project Name"
                value={formData.project_name}
                onChange={(e) =>
                  setFormData({ ...formData, project_name: e.target.value })
                }
                label="Project Name"
                required
              />

              <Select
                required
                value={formData.operating_system}
                onChange={(e) =>
                  setFormData({ ...formData, operating_system: e })
                }
                label="Opearting System Required"
                description="Select Operating System"
                placeholder="Operating System"
                data={[
                  { value: 'Windows', label: 'Windows' },
                  { value: 'Mac', label: 'Mac' },
                  { value: 'Linux', label: 'Linux' },
                ]}
              />

              <Select
                required
                value={formData.code_editor}
                onChange={(e) => setFormData({ ...formData, code_editor: e })}
                label="Select Your Code Editor/IDE"
                description="IDE to code with"
                placeholder="Code Editor/IDE"
                data={[
                  { value: 'Android Studio', label: 'Android Studio' },
                  { value: 'VS Code', label: 'VS Code' },
                  { value: 'Atom', label: 'Atom' },
                  { value: 'Sublime', label: 'Sublime' },
                  { value: 'Visual Studio', label: '' },
                  { value: 'Notepad', label: 'Notepad' },
                  { value: 'Eclipse', label: 'Eclipse' },
                  { value: 'IntelliJ', label: 'IntelliJ' },
                  { value: 'PyCharm', label: 'PyCharm' },
                  { value: 'Unity', label: 'Unity' },
                ]}
              />

              <MultiSelect
                required
                value={formData.database}
                onChange={(val) => setFormData({ ...formData, database: val })}
                data={[
                  {
                    value: 'MySQL',
                    label: 'MySQL',
                  },
                  {
                    value: 'PostgreSQL',
                    label: 'PostgreSQL',
                  },
                  {
                    value: 'MongoDB',
                    label: 'MongoDB',
                  },
                  {
                    value: 'Redis',
                    label: 'Redis',
                  },
                  {
                    value: 'Firebase',
                    label: 'Firebase',
                  },
                ]}
                label="Database"
                description="Database You Are Using"
                placeholder="Database"
              />

              <MultiSelect
                creatable
                searchable
                value={formData.misc}
                onChange={(e) => setFormData({ ...formData, misc: e })}
                data={data}
                label="Miscellaneous Softwares"
                placeholder="Extra Softwares Required"
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => setData((current) => [...current, query])}
                description="Extra Softwares Required"
              />
            </div>
            <Button
              size="md"
              style={{
                outline: 'none',
                marginTop: '1rem',
                border: 'none',
                backgroundColor: '#1c7ed6',
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
