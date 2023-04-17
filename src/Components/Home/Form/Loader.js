const Loader = () => {
  return (
    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-72 mx-auto mt-5">
      <div class="animate-pulse space-x-4">
        <div class="rounded-full bg-slate-700 h-10 w-10 mb-2"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded mt-3"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
              <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
