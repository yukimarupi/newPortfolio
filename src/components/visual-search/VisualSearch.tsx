import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

export function VisualSearch() {
  const [mode, setMode] = useState<'initial' | 'camera' | 'crop' | 'results'>('initial');
  const [image, setImage] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const captureImage = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setImage(imageSrc);
      setMode('crop');
    }
  }, [webcamRef]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setMode('crop');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {mode === 'initial' && (
        <div className="p-4 space-y-4">
          <h1 className="text-2xl font-bold text-center">Visual Search</h1>
          <p className="text-center">Search for an outfit by taking a photo or uploading an image</p>
          <div className="space-y-4">
            <button
              onClick={() => setMode('camera')}
              className="w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Take a photo
            </button>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer block text-center"
              >
                Upload an image
              </label>
            </div>
          </div>
        </div>
      )}

      {mode === 'camera' && (
        <div className="relative">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full"
          />
          <button
            onClick={captureImage}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white rounded-full p-4"
          >
            Capture
          </button>
        </div>
      )}

      {mode === 'crop' && image && (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Crop the item</h2>
          <img src={image} alt="Captured" className="w-full" />
          <button
            onClick={() => setMode('results')}
            className="mt-4 w-full py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Search
          </button>
        </div>
      )}

      {mode === 'results' && (
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Finding similar results...</h2>
          {/* Results will be displayed here */}
        </div>
      )}
    </div>
  );
}