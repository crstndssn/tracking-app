export default class Modal {


    successModalTemplate(message, modalContainer) {
        modalContainer.innerHTML = '';
        
    }

    successModalTemplate(message) {
        return `
        <div class="bg-green-50 rounded-lg p-5 my-2 shadow"">
            <p class="max-w-64 text-green-600">
                ${message}
            </p>
        </div>
        `;
    }

    errorModalTemplate(message) {
        return `
        <div class="bg-red-50 rounded-lg p-5 my-2 shadow">
            <p class="text-red-600">
                ${message}
            </p>
        </div>
        `;
    }

    notificationModalTemplate(message) {
        return `
        <div class="bg-gray-900 rounded-lg p-5 my-2 shadow">
            <p class="text-white">
                ${message}
            </p>
        </div>
        `;
    }

}