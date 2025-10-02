import { useEffect } from 'react';

const ChatPreloader = () => {
    useEffect(() => {
        // Preload chat-related components
        const preloadComponents = async () => {
            try {
                // Preload main chat components
                const chatPromises = [
                    import(/* webpackPreload: true */ '../ChatItGalaxy/ChatItGalaxy.jsx'),
                    import(/* webpackPrefetch: true */ '../../pages/Chat/ChatEntreprise/ListEntrepriseContainer/ListEntrepriseContainer.jsx'),
                    import(/* webpackPrefetch: true */ '../../pages/Chat/ChatRecruter/ListRecruterContainer/ListRecruterContainer.jsx'),
                ];

                // Preload modal components that are frequently used
                const modalPromises = [
                    import(/* webpackPrefetch: true */ 'components/ModalITgalaxy/ModalShowProposalEntreprise/ModalShowProposalEntreprise'),
                    import(/* webpackPrefetch: true */ 'components/ModalITgalaxy/ModalPayment/ModalPayment'),
                    import(/* webpackPrefetch: true */ 'components/ModalITgalaxy/ModalShowContact/ModalShowContact'),
                ];

                // Execute preloading in parallel
                await Promise.all([
                    Promise.all(chatPromises),
                    Promise.all(modalPromises),
                ]);
            } catch (error) {
                // Silently handle preloading errors
                console.debug('Error preloading components:', error);
            }
        };

        // Start preloading after a short delay to not block initial render
        const timeoutId = setTimeout(preloadComponents, 2000);

        return () => clearTimeout(timeoutId);
    }, []);

    // This component doesn't render anything
    return null;
};

export default ChatPreloader; 